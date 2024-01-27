import React, { FC, ReactElement, useEffect } from 'react';
import { View, Pressable, Keyboard } from 'react-native';
import { styles } from './CustomPressable.styles';

type CustomPressableProps = {
  action?: (value: boolean) => void;
  children?: ReactElement;
  customStyles?: StyleSheet;
  dismissKeyboard?: boolean;
};

const CustomPressable: FC<CustomPressableProps> = ({
  action,
  children,
  customStyles,
  dismissKeyboard,
}: CustomPressableProps): ReactElement => {
  useEffect(() => {
    if (dismissKeyboard) {
      Keyboard.dismiss();
    }
  }, [dismissKeyboard]);
  return (
    <View style={[styles.container, customStyles && { ...customStyles }]}>
      <Pressable onPress={action}>{children}</Pressable>
    </View>
  );
};

export { CustomPressable };
