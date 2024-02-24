import React, { FC, ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView, Text } from 'react-native';
import { GlobalStyles } from '@/styles/global';
import { COLORS } from '@/constants/colors';

type CartScreenProps =  {};

const CartScreen: FC<CartScreenProps> = ({}: CartScreenProps): ReactElement => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text style={{ color: COLORS.cream }}>Cart Screen</Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

CartScreen.displayName = CartScreen.name;

export { CartScreen };