import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView, Text } from 'react-native';
import { GlobalStyles } from '@/styles/global';

const ContactsScreen = () => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text>Contacts Screen</Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { ContactsScreen };