import React, { FC, ReactElement } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTypedDispatch } from '@/hooks/useReactRedux';
import { addCartItem } from '@/storage/slices/CartSlice';
import { Ionicons } from '@expo/vector-icons';
import { IMAGES } from '@/constants/images';
import { COLORS } from '@/constants/colors';
import { styles } from './ProductCard.styles';

type ProductCardProps = {
    id: number,
    title: string;
    price: {
        new: number | null;
        old: number;
    };
    isNew: boolean;
    ingredients: string;
    description: string;
    image: string;
};

const ProductCard: FC<ProductCardProps> = ({
    id,
    title,
    price,
    isNew,
    description,
    ingredients,
    image,
}: ProductCardProps): ReactElement => {
    const navigation = useNavigation();
    const dispatch = useTypedDispatch();

    const addToCart = () => {
        const CartItem = {
            id,
            title,
            price: price.new ? price.new : price.old,
            image
        };
        dispatch(addCartItem(CartItem));
        Alert.alert(`${title} for $${price.new ?? price.old} was added to cart`);
    };

    const goToProductScreen = () => {
        navigation.navigate('ProductScreen', {
            item: {
                title,
                price,
                isNew,
                description,
                image,
                ingredients,
            }
        });
    };

    return (
        <TouchableWithoutFeedback onPress={goToProductScreen}>
            <View style={styles.container}>
                {/* IMAGE BOX */}
                <View style={styles.image}>
                    {isNew && (
                        <View style={styles.imageNewItemNote}>
                            <Text style={styles.imageNewItemNoteText}>NEW</Text>
                        </View>
                    )}
                    <Image
                        style={styles.imagePicture}
                        source={IMAGES.pizzas[`${image}`]}
                    />
                </View>
                {/* CONTENT BOX */}
                <View style={styles.contentBox}>
                    {/* HEADER */}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.titleText}>{title}</Text>
                        </View>
                        <View style={styles.price}>
                            {price?.new && (
                                <Text style={styles.priceGeneral}>{`$${price?.new}`}</Text>
                            )}
                            <Text
                                style={[
                                    styles.priceGeneral,
                                    price?.new
                                        ? styles.priceOldLineThrough
                                        : styles.priceOld,
                                ]}>
                                {`$${price?.old}`}
                            </Text>
                        </View>
                    </View>
                    {/* FOOTER */}
                    <View style={styles.footer}>
                        <View style={styles.ingredients}>
                            <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                            <Text style={styles.ingredientsText} numberOfLines={1}>
                                {description}
                            </Text>
                        </View>
                        <TouchableWithoutFeedback onPress={addToCart}>
                            <View style={styles.actions}>
                                <Ionicons
                                    name='add-circle'
                                    size={32}
                                    color={COLORS.greenMedium}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View />
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

ProductCard.displayName = ProductCard.name;

export { ProductCard };
