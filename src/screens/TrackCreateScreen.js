import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);    
    const [err] = useLocation(addLocation);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2> Create Track!!</Text>
            <Map />
            <NavigationEvents onWillBlur = {() => console.log('Leaving')}/>
            {err ? <Text>Please enable location access!!</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;