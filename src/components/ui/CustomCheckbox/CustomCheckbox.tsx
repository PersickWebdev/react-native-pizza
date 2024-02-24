import React, { FC, ReactElement, useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { styles } from './CustomCheckbox.styles';

type CustomCheckboxProps = {
    label: string;
    value: string;
    customStyles?: StyleSheet;
    formData: any;
    setFormData: (value: string) => void;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
    label,
    value,
    customStyles,
    formData,
    setFormData,
}: CustomCheckboxProps): ReactElement => {
    const [isChecked, setIsChecked] = useState<boolean>(Boolean(formData));

    const handleOnPress = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        setFormData(isChecked ? value : '')
    }, [isChecked]);

    return (
        <View style={[styles.container, customStyles && { ...customStyles } ]}>
            <TouchableWithoutFeedback onPress={handleOnPress}>
                <View style={styles.content}>
                    <View style={styles.checkmarkBox}>
                        <View style={[styles.checkmark, isChecked && styles.isVisible]}/>
                    </View>
                    <View style={styles.label}>
                        <Text style={styles.labelText}>{label}</Text>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </View>
    );
};

CustomCheckbox.displayName = CustomCheckbox.name;

export { CustomCheckbox };
