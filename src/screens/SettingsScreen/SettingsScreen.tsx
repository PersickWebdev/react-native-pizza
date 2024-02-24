import React, { FC, ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView, Text } from 'react-native';
import { GlobalStyles } from '@/styles/global';
import { COLORS } from '@/constants/colors';

type SettingsScreenProps = {};

const SettingsScreen: FC<SettingsScreenProps> = ({}: SettingsScreenProps): ReactElement => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text style={{ color: COLORS.cream }}>Setting Screen</Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

SettingsScreen.displayName = SettingsScreen.name;

export { SettingsScreen };