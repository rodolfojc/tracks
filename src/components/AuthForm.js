import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
        <Spacer>        
            <Text h3>{headerText}</Text>
        </Spacer>
            <Input
                autoCapitalize= "none"
                autoCorrect= {false} 
                label="Email"
                value={email}
                onChangeText={setEmail} 
            />
            <Spacer />
                <Input
                    autoCapitalize= "none"
                    autoCorrect= {false}
                    secureTextEntry  
                    label="Password"
                    value={password}
                    onChangeText={setPassword}  
                />
            <Spacer />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button
                    onPress={() => onSubmit({email, password})} 
                    title={submitButtonText}/>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 15,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm;