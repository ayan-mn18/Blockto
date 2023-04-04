import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import text from '../../TextList/text';
import Onboarding2Img from '../../assets/Onboarding/Onboarding2.png'
import Onboarding from './Onboarding';

const Onboarding2 = () => {
    return (
        <Onboarding
            onboardingScreenNumber={2}
            image={Onboarding2Img}
            imageStyle={{}}
            skippable
            heading={text.Onboarding.Onboarding2Heading}
        />
    )
}

export default Onboarding2;

const styles = StyleSheet.create({})