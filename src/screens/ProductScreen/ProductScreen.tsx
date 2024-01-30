import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView, Text } from 'react-native';
import { GlobalStyles } from '@/styles/global';

const ProductScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text>Setting Screen</Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { ProductScreen };