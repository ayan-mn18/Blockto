import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import OnboardingStyles from './Onboarding.scss';
import OnboardingStatus from '../../Component/OnboardingScreen/OnboardingStatus';
import text from '../../TextList/text';
import ButtonFull from '../../Component/General/Buttons/ButtonFull';

const Onboarding = ({ onboardingScreenNumber, image, imageStyle, skippable, heading, SkipOnboarding, NextOnboardingPage }) => {
    return (
        <ScrollView style={OnboardingStyles.screenContainer} >
            <OnboardingStatus onboardingScreenNumber={onboardingScreenNumber} />
            <View style={OnboardingStyles.onboardingImage} >
                <Image source={image} style={[styles.imageDefaultStyle, imageStyle?.image]} />
            </View>
            <View style={imageStyle?.text} >
                <Text style={OnboardingStyles.heading} >
                    {heading}
                </Text>
                <Text style={OnboardingStyles.desc} >
                    {text.Onboarding.OnboardingDesc}
                </Text>
                <ButtonFull
                    buttonType={text.Buttons.primary}
                    onboardingScreenNumber={onboardingScreenNumber}
                    buttonContent={text.Onboarding.Continue}
                    OnClick={NextOnboardingPage}
                />
                {skippable &&
                    <ButtonFull
                        buttonType={text.Buttons.secondary}
                        OnClick={SkipOnboarding}
                        buttonContent={text.Onboarding.Skip}
                    />}
            </View>
        </ScrollView>
    )
}

export default Onboarding;

const styles = StyleSheet.create({
    imageDefaultStyle: {
        height: 325,
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})