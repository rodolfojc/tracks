import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { requestPermissionsAsync} from 'expo-location';

const TrackCreateScreen = () => {
    const [err, setErr] = useState('');

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (err) {
            setErr(err);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2> Create Track!!</Text>
            <Map />
            {err ? <Text>Please enable location access!!</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;