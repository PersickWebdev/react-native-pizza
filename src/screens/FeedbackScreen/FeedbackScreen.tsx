import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Platform,
    KeyboardAvoidingView,
    Text
} from 'react-native';

const FeedbackScreen = () => {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text>Feedback Screen</Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { FeedbackScreen };