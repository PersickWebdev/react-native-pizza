import React, { FC, ReactElement, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Textarea.styles';

type CustomStylesType = {
    container?: StyleSheet;
    input?: StyleSheet;
};

type TextareaProps = {
    name: string;
    value: string;
    label?: string;
    setFormData: (state: any) => void;
    customStyles?: CustomStylesType;
    returnKeyType?: string;
};

const Textarea: FC<TextareaProps> = ({ name, value, label, setFormData, customStyles, returnKeyType = 'done' }: TextareaProps): ReactElement => {
    const [ currentValue, setCurrentValue ] = useState<string>('');

    const handleOnTextChange = (text) => {
        setCurrentValue(text);
        setFormData && setFormData((state) => {
            return {
                ...state,
                [name]: text,
            }
        });
    };

    return (
        <View style={[styles.container, customStyles && { ...customStyles.container }]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, customStyles && { ...customStyles.input }]}
                value={value ?? currentValue}
                onChangeText={handleOnTextChange}
                multiline={false}
                returnKeyType={returnKeyType}
            />
        </View>
    );
};

Textarea.displayName = Textarea.name;

export { Textarea };