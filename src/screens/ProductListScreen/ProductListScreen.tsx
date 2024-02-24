import React, { FC, ReactElement, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Platform,
    KeyboardAvoidingView,
    Modal,
    TouchableWithoutFeedback,
    View,
    Text,
} from 'react-native';
import { useSearch } from '@/hooks/useSearch';
import { useRefresh } from '@/hooks/useRefresh';
import { ActionPanel } from '@/components/sections/ActionPanel';
import { Filter } from '@/components/sections/ActionPanel/Filter';
import { ProductsList } from '@/components/sections/ProductList';
import { CustomPressable } from '@/components/ui/CustomPressable/CustomPressable';
import { GlobalStyles } from '@/styles/global';
import { styles, ModalButtonCustomStyles } from './ProductListScreen.styles';

type ProductListScreenProps = {};

const ProductListScreen: FC<ProductListScreenProps> = ({}: ProductListScreenProps): ReactElement => {
    const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);
    const { currentProducts } = useSearch();
    const { isRefreshing, handleOnRefresh, handleOnEndReached } = useRefresh();

    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ActionPanel setIsModalVisible={setIsModalVisible} />

                <ProductsList
                    items={currentProducts}
                    isRefreshing={isRefreshing}
                    handleOnRefresh={handleOnRefresh}
                    handleOnEndReached={handleOnEndReached}
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
                            customStyles={ModalButtonCustomStyles}
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

ProductListScreen.displayName = ProductListScreen.name;

export { ProductListScreen };