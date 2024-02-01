import React, { FC, ReactElement, useEffect } from 'react';
import { View, Pressable, Keyboard } from 'react-native';
import { styles } from './CustomPressable.styles';

type CustomStylesType = {
  container?: StyleSheet,
  pressable?: StyleSheet,
}
type CustomPressableProps = {
    action?: (value: boolean) => void;
    children?: ReactElement;
    customStyles?: CustomStylesType;
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
    <View style={[
        styles.container,
        customStyles && { ...customStyles.container }
      ]}
    >
        <Pressable
            onPress={action}
            style={[
                styles.pressable,
                customStyles && { ...customStyles.pressable }
            ]}
        >
            {children}
        </Pressable>
    </View>
  );
};

export { CustomPressable };
