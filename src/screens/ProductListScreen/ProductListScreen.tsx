import React, { useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetProductsRequest } from '@/hooks/useGetProductsRequest';
import { COLORS } from '@/constants/colors';
import { styles } from './ProductListScreen.styles';

const ProductListScreen = () => {
    const { getProductsRequest, isProductsLoading, storageProducts } = useGetProductsRequest();

    useEffect(() => {
        getProductsRequest();
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            {isProductsLoading && <ActivityIndicator color={COLORS.cream}/>}
            <Text>Product List Screen</Text>
        </SafeAreaView>
    );
};

export { ProductListScreen };