import React from 'react';
import { Image, Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { IMAGES } from '@/constants/images';
import { styles } from './ProductCardDetails.styles';

const ProductCardDetails = ({ productData }) => {

    const addToCart = () => {
        Alert.alert(`${productData.title} added to cart. COMING SOON`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {productData?.title}
                </Text>
            </View>
            <View style={styles.price}>
                {productData?.price.new &&
                    <Text style={styles.priceGeneral}>
                        {productData?.price.new}
                    </Text>
                }
                <Text
                    style={[
                        styles.priceGeneral,
                        productData?.price.new ? styles.priceLineThrough : {}
                    ]}
                >
                    {productData?.price.old}
                </Text>
            </View>
            <View style={styles.image}>
                {productData?.isNew &&
                    <View style={styles.newItem}>
                        <Text style={styles.newItemText}>New</Text>
                    </View>
                }
                <Image
                    style={styles.imagePicture}
                    source={IMAGES.pizzas[`${productData?.image}`]}
                />
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    {productData?.description}
                </Text>
            </View>
            <View style={styles.ingredients}>
                <Text
                    style={styles.ingredientsText}>
                    {productData?.ingredients}
                </Text>
            </View>
            <TouchableWithoutFeedback onPress={addToCart}>
                <View style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>Get</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export { ProductCardDetails };