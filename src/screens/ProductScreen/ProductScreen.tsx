import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ProductCardDetails } from '@/components/global/ProductCardDetails';
import { GlobalStyles } from '@/styles/global';

const ProductScreen = ({ route }) => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ProductCardDetails productData={route.params.item}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { ProductScreen };