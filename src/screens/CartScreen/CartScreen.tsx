import React, { FC, ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { Cart } from '@/components/global/Cart/Cart';
import { GlobalStyles } from '@/styles/global';

type CartScreenProps =  {};

const CartScreen: FC<CartScreenProps> = ({}: CartScreenProps): ReactElement => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Cart />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

CartScreen.displayName = CartScreen.name;

export { CartScreen };