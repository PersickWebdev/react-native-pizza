import React, { FC, ReactElement, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Textarea.styles';

type CustomStylesType = {
    container?: StyleSheet;
    input?: StyleSheet;
};

type TextareaProps = {
    name: string;
    label?: string;
    formData: any;
    setFormData: (state: any) => void;
    customStyles?: CustomStylesType;
};

const Textarea: FC<TextareaProps> = ({ name, label, formData, customStyles }: TextareaProps): ReactElement => {
    return (
        <View style={[styles.container, customStyles && { ...customStyles.container }]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, customStyles && { ...customStyles.input }]}
                name={name}
                value={formData.name}
                multiline={true}
            />
        </View>
    );
};

Textarea.displayName = Textarea.name;

export { Textarea };