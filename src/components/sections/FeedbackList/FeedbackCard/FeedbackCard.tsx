import React, { FC, ReactElement } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './FeedbackCard.styles';
import { COLORS } from '@/constants/colors';

type FeedbackCardProps = {
    userName: string;
    userMessage: string;
};

const FeedbackCard: FC<FeedbackCardProps> = ({
    userName,
    userMessage,
}: FeedbackCardProps): ReactElement => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Ionicons
                        name='person-circle'
                        size={42}
                        color={COLORS.golden}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.userMessage}>{userMessage}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

FeedbackCard.displayName = FeedbackCard.name;

export { FeedbackCard };
