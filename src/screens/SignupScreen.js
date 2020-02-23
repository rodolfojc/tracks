import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    
    const { state, signup } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <View style={styles.container}>
            <Spacer>        
                <Text h3>Sign Up for Tracker</Text>
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
            <Spacer>
                <Button
                    onPress={() => signup({ email, password })} 
                    title="Sign Up" />
            </Spacer>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    container: {
        //borderColor: 'red',
        //borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;