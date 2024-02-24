import React, { FC, ReactElement, useState } from 'react';
import Animated from 'react-native-reanimated';
import { View, TextInput } from 'react-native';
import { useCustomInputAnimation } from '@/components/ui/CustomInput/CustomInput.animation';
import { styles } from './Textarea.styles';

type CustomStylesType = {
    container?: StyleSheet;
    input?: StyleSheet;
};

type TextareaProps = {
    name: string;
    value: string;
    label: string;
    setFormData: (state: any) => void;
    customStyles?: CustomStylesType;
    returnKeyType?: string;
};

const Textarea: FC<TextareaProps> = ({
    name,
    value,
    label,
    setFormData,
    customStyles,
    returnKeyType = 'done'
}: TextareaProps): ReactElement => {
    const {
        animatedLabelContainerStyles,
        animatedLabelTextStyles,
        handleAnimationStart,
        handleAnimationEnd
    } = useCustomInputAnimation();

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
            <Animated.View style={[styles.label, animatedLabelContainerStyles]}>
                <Animated.Text style={[styles.labelText, animatedLabelTextStyles]}>
                    {label}
                </Animated.Text>
            </Animated.View>
            <TextInput
                style={[styles.input, customStyles && { ...customStyles.input }]}
                value={value ?? currentValue}
                onChangeText={handleOnTextChange}
                multiline={false}
                returnKeyType={returnKeyType}
                onFocus={!currentValue ? handleAnimationStart : null}
                onBlur={!currentValue ? handleAnimationEnd : null}
            />
        </View>
    );
};

Textarea.displayName = Textarea.name;

export { Textarea };