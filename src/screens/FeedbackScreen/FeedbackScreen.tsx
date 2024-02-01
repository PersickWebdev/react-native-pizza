import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Platform,
    KeyboardAvoidingView,
    Text,
    TouchableWithoutFeedback,
    View,
    Modal,
} from 'react-native';
import { CustomPressable } from '@/components/ui/CustomPressable';
import { FeedbackForm } from '@/components/global/FeedbackForm';
import { GlobalStyles } from '@/styles/global';
import { styles, CustomStyles } from './FeedbackScreen.styles';

const FeedbackScreen = () => {
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    const handleOnPress = () => {
        setIsModalVisible(true);
    };

    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <CustomPressable
                    customStyles={CustomStyles.leaveFeedbackButton}
                    action={handleOnPress}
                >
                    <Text style={CustomStyles.leaveFeedbackButton.text}>Leave feedback</Text>
                </CustomPressable>

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
                        <FeedbackForm />
                        {/*<CustomPressable*/}
                        {/*    customStyles={CustomStyles.modalSendButton}*/}
                        {/*    action={() => setIsModalVisible(!isModalVisible)}*/}
                        {/*>*/}
                        {/*    <Text style={CustomStyles.modalSendButton.text}>Accept</Text>*/}
                        {/*</CustomPressable>*/}
                    </View>
                </Modal>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { FeedbackScreen };