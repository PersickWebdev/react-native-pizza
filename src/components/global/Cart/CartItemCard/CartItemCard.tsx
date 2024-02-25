import React, { FC, ReactElement } from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import { useTypedDispatch, useTypedSelector } from '@/hooks/useReactRedux';
import { Ionicons } from '@expo/vector-icons';
import { increaseByOne, decreaseByOne, removeCartItem } from '@/storage/slices/CartSlice';
import { styles } from './CartItemCard.styles';
import { COLORS } from '@/constants/colors';
import { IMAGES } from '@/constants/images';

type CartItemCardProps = {
    id: number;
    title: string;
    image: string;
};

const CartItemCard: FC<CartItemCardProps> = ({
    id,
    title,
    image,
}: CartItemCardProps): ReactElement => {
    const dispatch = useTypedDispatch();
    const { cartItems } = useTypedSelector((state) => state.Cart);
    const itemQuantity = cartItems[id].length;
    const itemTotalPrice = cartItems[id].reduce((sum, item) => sum + item.price, 0);

    const handleIncrease = () => {
        dispatch(increaseByOne(id));
    };

    const handleDecrease = () => {
        dispatch(decreaseByOne(id));
    };

    const handleRemove = () => {
        dispatch(removeCartItem(id));
    };

    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        style={styles.imagePicture}
                        source={IMAGES.pizzas[`${image}`]}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{title}</Text>
                    </View>
                    <View style={styles.actions}>
                        <View style={styles.quantityControl}>
                            <Ionicons
                                onPress={handleDecrease}
                                name='remove-circle'
                                size={32}
                                color={COLORS.golden}
                            />
                            <View style={styles.quantity}>
                                <Text style={styles.quantityText}>{itemQuantity}</Text>
                            </View>
                            <Ionicons
                                onPress={handleIncrease}
                                name='add-circle'
                                size={32}
                                color={COLORS.golden}
                            />
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>{`$${itemTotalPrice}`}</Text>
                        </View>
                        <View>
                            <Ionicons
                                onPress={handleRemove}
                                name='trash'
                                size={32}
                                color={COLORS.red}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

CartItemCard.displayName = CartItemCard.name;

export { CartItemCard };
