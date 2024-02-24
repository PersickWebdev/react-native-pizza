import React, { FC, ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackType } from '@/navigation/NativeStack';
import { ProductCardDetails } from '@/components/global/ProductCardDetails';
import { GlobalStyles } from '@/styles/global';

type ProductCardDetailsProps = NativeStackScreenProps<HomeStackType, 'ProductScreen'>

const ProductScreen: FC<ProductCardDetailsProps> = ({ route }: ProductCardDetailsProps): ReactElement => {
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

ProductScreen.displayName = ProductScreen.name;

export { ProductScreen };