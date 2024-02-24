import React, { FC, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Empty.styles';

type EmptyProps = {
    message: string;
};

const Empty: FC<EmptyProps> = ({ message= 'No results ...' }: EmptyProps): ReactElement => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {message}
            </Text>
        </View>
    );
};

Empty.displayName = Empty.name;

export { Empty };

