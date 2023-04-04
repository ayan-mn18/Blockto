import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from './Onboarding';
import Onboarding1Img from '../../assets/Onboarding/Onboarding1.png';
import text from '../../TextList/text';

const Onboarding1 = () => {
    return (
        <Onboarding
            onboardingScreenNumber={1}
            image={Onboarding1Img}
            imageStyle={{}}
            skippable
            heading={text.Onboarding.Onboarding1Heading}
        />
    )
}

export default Onboarding1;

const styles = StyleSheet.create({})