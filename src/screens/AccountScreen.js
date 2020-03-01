import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from 'react-native-vector-icons';

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return(
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Spacer>
                <Button
                    onPress={signout} 
                    title="Sign Out"
                />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Acoount',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
};

const styles = StyleSheet.create({});

export default AccountScreen;
