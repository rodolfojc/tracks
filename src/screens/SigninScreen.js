import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(Context);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign In to your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
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