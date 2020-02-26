import '../_mockLocation';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';

const TrackCreateScreen = () => {
    const [err, setErr] = useState('');

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, 
                location => {
                console.log(location);
            });
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