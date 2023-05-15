import React, { useState, createContext, ReactNode, useEffect } from 'react';

import { ToastAndroid } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';


export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = useState({
        id: '', 
        cpf: '', 
        nomeCompleto: '', 
        apelido: '', 
        email: '', 
        dataNascimento: '', 
        telefone: '',
        foto: '',
        perfis: [],
        status: '',
        token: ''
    });

    const [loadingAuth, setLoadingAuth] = useState(false);//Faz um carregamento com icone girando na tela se true
    const [loading, setLoading] = useState(true);//se for true vai fazer carregamento de icone girando na tela

    const isAuthenticated = !!user.token;//se estiver vazio significa que ele não fez login!//Recebe true porque o nome esta preenchido

    useEffect(() => {
        async function getUser() {
            //Pegar os dados salvos do user
            const userInfo = await AsyncStorage.getItem('@usuario');
            let hasUser = JSON.parse(userInfo || '{}');

            //Verificar se recebemos as informações dele
            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `${hasUser.token}`;
                
                setUser({
                    id: hasUser.id,
                    cpf: hasUser.cpf,
                    nomeCompleto: hasUser.nomeCompleto,
                    apelido: hasUser.apelido,
                    email: hasUser.email,
                    dataNascimento: hasUser.dataNascimento,
                    telefone: hasUser.telefone,
                    foto: hasUser.foto,
                    status: hasUser.status,
                    token: hasUser.token,
                });

            }

            setLoading(false);

        }


        getUser();
    }, []);

    async function signIn({ cpf, senha }) {
        // console.log(email);
        // console.log(senha);

        setLoadingAuth(true);

        try {
            // console.log(cpf);
            // console.log(senha);
            const response = await api.post('/login', {
                cpf,
                senha
            })
            // .then((response) => {
            //     //console.log(response.headers);
            //     console.log("Token: " + response.headers.get('Authorization'));
            //     //bearerToken = response.headers.get('Authorization');
            // });

            console.log("TOKEN: " + await response.headers.get('Authorization'));

            const token = await response.headers.get('Authorization');

            api.defaults.headers.common['Authorization'] = `${token}`;

            //Buscar usuário autenticado
            //localhost:8080/api/user/buscaEmail/carlos@gmail.com
            const gmail = 'carlos@gmail.com';
            const user = await api.get(`/api/user/buscaCpf/${cpf}`, user);

            // console.log("CPF: " + user.data.cpf);

            const { 
                id, 
                nomeCompleto, 
                apelido,  
                email,
                dataNascimento, 
                telefone,
                foto,
                perfis,
                status
             } = user.data;
             
            console.log("Poder: " + perfis);

            setUser({
                id, 
                cpf, 
                nomeCompleto, 
                apelido, 
                email, 
                dataNascimento, 
                telefone,
                foto,
                perfis,
                status,
                token
            });

            const data = {
                id, 
                cpf, 
                nomeCompleto, 
                apelido, 
                email, 
                dataNascimento, 
                telefone,
                foto,
                perfis,
                status,
                token
            };

            await AsyncStorage.setItem('@usuario', JSON.stringify(data));

            // console.log(await AsyncStorage.getItem('@usuario'));

            setLoadingAuth(false);

        } catch (err) {
            console.log("Erro ao acessar", err);
            setLoadingAuth(false);
        }
    }

    async function updateProfileImage({ foto }){
        await AsyncStorage.setItem('@usuario').then(() => {
            setUser({
                foto: foto,
            });
        });
    }

    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
                setUser({
                    id: '',
                    name: '',
                    cpf: '',
                    email: '',
                    token: '',
                });
            });
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            signIn,
            loadingAuth,
            loading,
            signOut,
            updateProfileImage
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}