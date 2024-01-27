import React, { FC, ReactElement, useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { COLORS } from '@/constants/colors';

import { styles } from './Input.styles';

type InputProps = {
  formData?: string;
  setFormData?: (state: any) => void;
  placeholder: string;
  customStyle?: string;
  onSubmitHandler?: () => void;
  clearValue?: boolean;
};

const Input: FC<InputProps> = ({
  formData,
  setFormData,
  placeholder,
  customStyle,
  onSubmitHandler,
  clearValue,
}): ReactElement => {
  const [currentValue, setCurrentValue] = useState<string>('');

  const handleOnChangeText = (text: string) => {
    setCurrentValue(text);
    setFormData && setFormData(text);
  };

  useEffect(() => {
    if (clearValue) {
      setCurrentValue('');
      setFormData && setFormData('')
    }
  }, [clearValue])

  return (
    <View style={[styles.container, styles[`${customStyle}`]]}>
      <TextInput
        style={styles.inputElement}
        value={formData ?? currentValue}
        placeholder={placeholder}
        placeholderTextColor={COLORS.graphite}
        onChangeText={handleOnChangeText}
        returnKeyType="search"
        onSubmitEditing={onSubmitHandler}
      />
    </View>
  );
};

Input.displayName = Input.name;

export { Input };
