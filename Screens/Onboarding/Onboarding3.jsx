import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from './Onboarding';
import Onboarding3Img from '../../assets/Onboarding/Onboarding3.png';
import text from '../../TextList/text';

const Onboarding3 = () => {
    return (
        <Onboarding
            onboardingScreenNumber={3}
            image={Onboarding3Img}
            imageStyle={{
                image: {
                    height: 600,
                    width: '100%',
                },
                text: {
                    position: 'absolute',
                    bottom: 0
                }
            }}
            heading={text.Onboarding.Onboarding3Heading}
        />
    )
}

export default Onboarding3;

const styles = StyleSheet.create({})