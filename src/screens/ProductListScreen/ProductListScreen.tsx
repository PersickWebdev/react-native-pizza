import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Platform,
    KeyboardAvoidingView,
    Modal,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native';
import { useGetProductsRequest } from '@/hooks/useGetProductsRequest';
import { ActionPanel } from '@/components/sections/ActionPanel';
import { Filter } from '@/components/sections/ActionPanel/Filter';
import { ProductsList } from '@/components/sections/ProductList';
import { CustomPressable } from '@/components/ui/CustomPressable/CustomPressable';
import { GlobalStyles } from '@/styles/global';
import { styles } from './ProductListScreen.styles';

const ProductListScreen = () => {
    const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);
    const {
        searchedProducts,
        // isRefreshing,
        // handleOnRefresh,
        // handleOnEndReached,
    } = useGetProductsRequest();

    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ActionPanel setIsModalVisible={setIsModalVisible} />

                <ProductsList
                    items={searchedProducts}
                    // isRefreshing={isRefreshing}
                    // handleOnRefresh={handleOnRefresh}
                    // handleOnEndReached={handleOnEndReached}
                />

                <Modal
                    animationType="slide"
                    transparent
                    visible={isModalVisible}
                    onRequestClose={() => {
                        setIsModalVisible(!isModalVisible);
                    }}
                >
                    <TouchableWithoutFeedback onPress={() => setIsModalVisible(!isModalVisible)}>
                        <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>

                    <View style={styles.modalContent}>
                        <Filter />
                        <CustomPressable
                            customStyles={styles.modalButtonCustomStyle}
                            action={() => setIsModalVisible(!isModalVisible)}
                        >
                            <Text style={styles.modalButtonText}>Accept</Text>
                        </CustomPressable>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { ProductListScreen };