import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView, Text, View, Image } from 'react-native';
import { GlobalStyles } from '@/styles/global';
import { styles } from './ProductScreen.styles';
import { IMAGES } from '@/constants/images';

const ProductScreen = ({ route }) => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {/* Todo: create 'ProductCardDetails' component. Replace the following layout with it  */}

                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            {route.params.item.title}
                        </Text>
                    </View>
                    <View style={styles.image}>
                        <Image
                            style={styles.imagePicture}
                            source={IMAGES.pizzas[`${route.params.item.image}`]}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text
                            style={styles.descriptionText}>
                            {route.params.item.description}
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export { ProductScreen };