import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import OnboardingStatusStyles from './OnboardingStatus.scss'

const OnboardingStatus = ({ onboardingScreenNumber }) => {
    const screenNumberReducer = () => {
        onboardingScreenNumber--;
        return OnboardingStatusStyles.active;
    }
    return (
        <View style={OnboardingStatusStyles.componentContainer} >
            <Text
                style={[OnboardingStatusStyles.statusBar, onboardingScreenNumber > 0 ? screenNumberReducer() : {}, styles.borderRadius]} ></Text>
            <Text
                style={[OnboardingStatusStyles.statusBar, onboardingScreenNumber > 0 ? screenNumberReducer() : {}, styles.borderRadius]} ></Text>
            <Text
                style={[OnboardingStatusStyles.statusBar, onboardingScreenNumber > 0 ? screenNumberReducer() : {}, styles.borderRadius]} ></Text>
        </View>
    )
}

export default OnboardingStatus;

const styles = StyleSheet.create({
    borderRadius: {
        overflow: 'hidden',
        borderRadius: 1,
    }
})