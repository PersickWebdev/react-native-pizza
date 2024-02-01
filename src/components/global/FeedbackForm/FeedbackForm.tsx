import React, { FC, ReactElement, useState } from 'react';
import { View, Text } from 'react-native';
import { Textarea } from '@/components/ui/Textarea';
import { styles, CustomStyles } from './FeedbackForm.styles';

type FeedbackFormProps = {
    heading?: string;
};

const FeedbackForm: FC<FeedbackFormProps> = ({ heading }: FeedbackFormProps): ReactElement => {
    const [ formData, setFormData ] = useState({
        name: '',
        message: '',
    });

    return (
        <View style={styles.container}>
            {heading && <View style={styles.heading}>
                <Text style={styles.headingText}>
                    {heading}
                </Text>
            </View>}
            <View style={styles.section}>
                <Textarea
                    label='Your name/nickname:'
                    name='name'
                />
            </View>
        </View>
    );
};

FeedbackForm.displayName = FeedbackForm.name;

export { FeedbackForm };