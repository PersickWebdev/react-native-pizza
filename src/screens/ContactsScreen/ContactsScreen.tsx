import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Platform,
    KeyboardAvoidingView,
    Text
} from 'react-native';

const ContactsScreen = () => {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text>Contacts Screen</Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { ContactsScreen };