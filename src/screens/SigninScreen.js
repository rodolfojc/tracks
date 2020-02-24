import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign In to your Account"
                errorMessage=""
                onSubmit={() => {}}
                submitButtonText="Sign In"
            />
            <NavLink 
                routeName="Signup"
                text="Don't have an account? Sing up instead!!"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },   
});

export default SigninScreen;