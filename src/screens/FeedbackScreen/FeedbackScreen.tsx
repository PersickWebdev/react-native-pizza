import React, { FC, ReactElement, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Platform,
    KeyboardAvoidingView,
    Text,
    TouchableWithoutFeedback,
    View,
    Modal,
    ActivityIndicator,
} from 'react-native';
import { useGetFeedbacks } from '@/api/hooks/useGetFeedbacks';
import { CustomPressable } from '@/components/ui/CustomPressable';
import { FeedbackForm } from '@/components/global/FeedbackForm';
import { FeedbackList } from '@/components/sections/FeedbackList';
import { useRefresh } from '@/hooks/useRefresh';
import { GlobalStyles } from '@/styles/global';
import { styles, CustomStyles } from './FeedbackScreen.styles';

type FeedbackScreenProps = {};

const FeedbackScreen: FC<FeedbackScreenProps> = ({}: FeedbackScreenProps): ReactElement => {
    const { feedbacks, isLoading: isFeedbacksLoading } = useGetFeedbacks();
    const { isRefreshing, handleOnRefresh, handleOnEndReached } = useRefresh();
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

                {isFeedbacksLoading
                    ?
                        <ActivityIndicator style={styles.activityIndicator}/>
                    :
                        <FeedbackList
                            items={feedbacks}
                            isRefreshing={isRefreshing}
                            handleOnRefresh={handleOnRefresh}
                            handleOnEndReached={handleOnEndReached}
                        />
                }

                <Modal
                    animationType="slide"
                    transparent
                    visible={isModalVisible}
                    onRequestClose={() => {
                        setIsModalVisible(!isModalVisible);
                    }}
                >
                    <TouchableWithoutFeedback
                        // onPress={() => setIsModalVisible(!isModalVisible)}
                    >
                        <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>

                    <View style={styles.modalContent}>
                        <FeedbackForm
                            heading='Leave us your feedback'
                            setIsModalVisible={setIsModalVisible}
                        />
                    </View>
                </Modal>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

FeedbackScreen.displayName = FeedbackScreen.name;

export { FeedbackScreen };