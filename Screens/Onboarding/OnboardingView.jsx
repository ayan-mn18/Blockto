import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import ViewPager from '@react-native-community/viewpager';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
import Onboarding from './Onboarding';
import text from '../../TextList/text';
import Onboarding1Img from '../../assets/Onboarding/Onboarding1.png';
import Onboarding2Img from '../../assets/Onboarding/Onboarding2.png';
import Onboarding3Img from '../../assets/Onboarding/Onboarding3.png';
import { useNavigation } from '@react-navigation/native';


const OnboardingView = () => {
    const pagerRef = useRef(null);
    const navigation = useNavigation();

    const SkipOnboarding = () => {
        // pagerRef.current.setPage(2);
        navigation.navigate('Login')
    }

    const NextOnboardingPage = (onboardingScreenNumber) => {
        if (onboardingScreenNumber < 3) return pagerRef.current.setPage(onboardingScreenNumber);
    }
    return (
        <View style={styles.screenContainer} >
            <ViewPager style={styles.viewPager} initialPage={0} ref={pagerRef}>
                <View style={styles.container} key="1">
                    <Onboarding
                        onboardingScreenNumber={1}
                        image={Onboarding1Img}
                        imageStyle={{}}
                        skippable
                        SkipOnboarding={SkipOnboarding}
                        NextOnboardingPage={NextOnboardingPage}
                        heading={text.Onboarding.Onboarding1Heading}
                    />
                </View>
                <View style={styles.container} key="2">
                    <Onboarding
                        onboardingScreenNumber={2}
                        image={Onboarding2Img}
                        imageStyle={{}}
                        skippable
                        SkipOnboarding={SkipOnboarding}
                        NextOnboardingPage={NextOnboardingPage}
                        heading={text.Onboarding.Onboarding2Heading}
                    />
                </View>
                <View style={styles.container} key="3">
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
                        NextOnboardingPage={SkipOnboarding}
                    />
                </View>
            </ViewPager>
        </View>
    )
}

export default OnboardingView;

const styles = StyleSheet.create({
    container: {
        // width: "100%",
        height: "100%"
    },
    screenContainer: {
        width: "100%",
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    viewPager: {
        aspectRatio: 0.5,
        resizeMode: 'contain'
    },
})