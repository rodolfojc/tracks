import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return<>        
        <Text style={{fontSize: 48}}>SigninScreen</Text>
        <Button
            onPress={() => navigation.navigate('Signin')} 
            title="Go to SignIn"
        />
        <Button
            onPress={() => navigation.navigate('mainFlow')} 
            title="Go to Main Flow"
        />             
    </>;
};

const styles = StyleSheet.create({});

export default SignupScreen;