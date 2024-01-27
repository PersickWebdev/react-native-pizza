import React from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import { onShare } from '@/utils/share';
import { styles } from './Slide.styles';

const { width, height } = Dimensions.get('window');

const Slide = ({ item, setStopTimeout }) => {
    const handleOnPress = async () => {
        setStopTimeout(true);
        await onShare(item.url);
    };

    const ElementDimensions = {
        width: width - 20,
        height: height / 3
    };

    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
            <View style={[styles.container, { ...ElementDimensions }]}>
                <Image
                    style={[styles.image, { ... ElementDimensions }]}
                    source={{ uri: item.url }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export { Slide };