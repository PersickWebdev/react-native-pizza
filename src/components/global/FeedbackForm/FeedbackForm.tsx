import React, { FC, ReactElement, useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useTypedDispatch } from '@/hooks/useReactRedux';
import { CustomInput } from '@/components/ui/CustomInput';
import { Textarea } from '@/components/ui/Textarea';
import { CustomPressable } from '@/components/ui/CustomPressable';
import { addFeedback } from '@/storage/slices/FeedbacksSlice';
import { styles, CustomStyles } from './FeedbackForm.styles';

type FeedbackFormProps = {
    heading?: string;
    setIsModalVisible?: (state: boolean) => void;
};

const FeedbackForm: FC<FeedbackFormProps> = ({ heading, setIsModalVisible }: FeedbackFormProps): ReactElement => {
    const dispatch = useTypedDispatch();
    const [ formData, setFormData ] = useState({
        userName: '',
        userMessage: '',
    });

    const handleSend = () => {
        console.log('> > > FeedbackForm -> formData: ', formData);
        dispatch(addFeedback(formData));
        setIsModalVisible && setIsModalVisible(false);
    };

    const handleClose = () => {
        console.log('> > > FeedbackForm -> cancel');
        setIsModalVisible && setIsModalVisible(false);
    };

    return (
        <TouchableWithoutFeedback
            // onPress={() => setIsModalVisible && setIsModalVisible(false)}
        >
            <View style={styles.container}>
                <View>
                    {
                        heading &&
                        <View style={styles.heading}>
                            <Text style={styles.headingText}>
                                {heading}
                            </Text>
                        </View>
                    }
                    <View style={styles.sections}>
                        <View style={styles.section}>
                            <CustomInput
                                label='Your name/nickname:'
                                name='userName'
                                value={formData.userName}
                                setFormData={setFormData}
                                returnKeyType='done'
                            />
                        </View>
                        <View style={styles.section}>
                            <Textarea
                                label='Your message:'
                                name='userMessage'
                                value={formData.userMessage}
                                setFormData={setFormData}
                                returnKeyType='done'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.actions}>
                    <CustomPressable
                        customStyles={CustomStyles.buttonClose}
                        action={handleClose}
                    >
                        <Text>CLOSE</Text>
                    </CustomPressable>
                    <CustomPressable
                        customStyles={CustomStyles.buttonSend}
                        action={handleSend}
                    >
                        <Text>SEND</Text>
                    </CustomPressable>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

FeedbackForm.displayName = FeedbackForm.name;

export { FeedbackForm };