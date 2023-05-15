// import React, { useState, useContext } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

// import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// import { AuthContext } from '../../context/AuthContext';


// export default function SignIn() {
//     const [cpf, setCpf] = useState('');
//     const [senha, setSenha] = useState('');

//     const { signIn, loadingAuth } = useContext(AuthContext);

//     const navigation = useNavigation();

//     async function handleLogin() {
//         if (cpf === '' || senha === '') {
//             // alert("PREENCHA TODOS CAMPOS!");
//             return;
//         }
//         console.log("SIGNIN: " + cpf);
//         await signIn({ cpf, senha });
//     }

//     return (
//         <View style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require('../../assets/logoSenac.png')}
//             />

//             <Text style={styles.pergunta}>
//                 Você possui uma conta?
//             </Text>

//             <View style={styles.inputContainer}>
//                 <View style={styles.inputLabel}>
//                     <View style={styles.inputIcon}>
//                         <FontAwesome name="user" size={18} color="#FFF" />
//                     </View>
//                     <TextInput
//                         placeholder="Usuário"
//                         style={styles.input}
//                         placeholderTextColor="#000"
//                         value={cpf}
//                         onChangeText={setCpf}
//                     />
//                 </View>

//                 <View style={styles.inputLabel}>
//                     <View style={styles.inputIcon}>
//                         <FontAwesome name="lock" size={18} color="#FFF" />
//                     </View>
//                     <TextInput
//                         placeholder="Senha"
//                         style={styles.input}
//                         placeholderTextColor="#000"
//                         secureTextEntry={true}
//                         value={senha}
//                         onChangeText={setSenha}
//                     />
//                 </View>

//                 <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                     { loadingAuth ? (
//                         <ActivityIndicator size={25} color="#FFF"/>
//                     ): (
//                         <Text style={styles.buttonText}>Acessar</Text>
//                     )}
//                 </TouchableOpacity>

//                 <Text style={styles.link}>
//                     Esqueceu o seu usuário ou senha?
//                 </Text>

//             </View>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FFF',
//     },
//     logo: {
//         marginBottom: 18,
//         width: 250,
//         height: 100
//     },
//     inputContainer: {
//         width: '90%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 32,
//         paddingHorizontal: 14,
//     },
//     inputLabel: {
//         flexDirection: 'row',
//         width: '95%',
//         // height: 40
//     },
//     inputIcon: {
//         backgroundColor: '#004587',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 40,
//         width: '10%',
//         borderWidth: 1,
//         borderColor: '#d6d4d1',
//     },
//     input: {
//         width: '90%',
//         height: 40,
//         backgroundColor: '#fff',
//         marginBottom: 12,
//         borderRadius: 0,
//         borderWidth: 1,
//         borderColor: '#d6d4d1',
//         paddingHorizontal: 8,
//         color: '#000',
//     },
//     button: {
//         width: '95%',
//         height: 40,
//         backgroundColor: '#004587',
//         borderRadius: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // marginTop: 12
//     },
//     buttonText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#FFF',
//     },
//     pergunta:{
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#6c6c6d',
//     },  
//     link: {
//         marginTop: 12,
//         color: '#004587'
//     }
// });

import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Input, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
//import { Stack, TextInput, IconButton } from '@react-native-material/core';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/AuthContext';


export default function SignIn() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    const navigation = useNavigation();

    async function handleLogin() {
        if (cpf === '' || senha === '') {
            // alert("PREENCHA TODOS CAMPOS!");
            return;
        }
        // console.log("SIGNIN: " + cpf);
        await signIn({ cpf, senha });
    }

    return (
        <View style={styles.container}>

            <Text style={styles.pergunta}>LOGIN</Text>

            <View style={styles.inputContainer}>
                <View style={styles.inputLabel}>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.input}
                        placeholderTextColor="#000"
                        value={cpf}
                        onChangeText={setCpf}
                    />
                </View>

                <View style={styles.inputLabel}>
                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        placeholderTextColor="#000"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color="#FFF" />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
                </TouchableOpacity>

                {/* <Text style={styles.link}>
                    Esqueceu o seu usuário ou senha?
                </Text> */}

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    logo: {
        marginBottom: 18,
        width: 250,
        height: 100
    },
    inputContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    inputLabel: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 60,
    },
    // inputIcon: {
    //     backgroundColor: '#004587',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 40,
    //     width: '10%',
    //     borderWidth: 1,
    //     borderColor: '#d6d4d1',
    // },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#004587',
        paddingHorizontal: 8,
        color: '#000',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#004587',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        // borderWidth: 2,
        // marginTop: 12
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    pergunta: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004587',
    },
    link: {
        marginTop: 12,
        color: '#004587'
    }
});