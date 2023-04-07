import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import text from '../../../TextList/text';
import buttonStyle from './ButtonFull.scss';

const ButtonFull = ({ buttonType, buttonContent, onboardingScreenNumber, skippable, SkipOnboarding, NextOnboardingPage }) => {
    const buttonBgClass = () => {
        return buttonType === text.Buttons.primary ? buttonStyle.primary : buttonStyle.secondary;
    }
    return (
        <TouchableOpacity
            style={[buttonStyle.buttonFull, buttonBgClass()]}
            onPress={() => skippable ? SkipOnboarding() : NextOnboardingPage(onboardingScreenNumber)}
        >
            <Text style={buttonStyle.buttonText} > {buttonContent} </Text>
        </TouchableOpacity>
    )
}

export default ButtonFull;

const styles = StyleSheet.create({})