import React, { FC, ReactElement } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { useTypedSelector } from '@/hooks/useReactRedux';
import { normalizeCartItemsData } from '@/components/global/Cart/Cart.utils';
import { CartItemCard } from '@/components/global/Cart/CartItemCard';
import { CartItem } from '@/components/global/Cart/CartItemCard/CartItemCard.types';
import { Empty } from '@/components/global/Empty';
import { CustomPressable } from '@/components/ui/CustomPressable';
import { styles, CustomStyles } from './Cart.styles';

type CartProps =  {};

const Cart: FC<CartProps> = ({}: CartProps): ReactElement => {
    const { cartItems, totalItemsCount, totalItemsPrice } = useTypedSelector((state) => state.Cart);

    console.log('>>> Cart -> cartItems: ', cartItems);
    console.log('>>> Cart -> totalItemsCount: ', totalItemsCount);
    console.log('>>> Cart -> totalItemsPrice: ', totalItemsPrice);

    const normalizedCartItems = normalizeCartItemsData(cartItems);

    console.log('>>> >>> >>> Cart -> normalizedCartItems: ', normalizedCartItems);

    const renderItem: ListRenderItem<CartItem[][number]> = ({ item }) => (
        <CartItemCard {...item} />
    );

    const handleOnPress = () => {};

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={normalizedCartItems}
                keyboardShouldPersistTaps="handled"
                renderItem={renderItem}
                ListEmptyComponent={<Empty message='No results ...' />}
            />
            <View style={styles.summery}>
                <View style={styles.totalPrice}>
                    <Text style={[styles.totalPriceText]}>Total price:</Text>
                    <Text style={[styles.totalPriceText, styles.totalPriceTextValue]}>{`$${totalItemsPrice}`}</Text>
                </View>
                <CustomPressable
                    customStyles={CustomStyles.confirmOrderButton}
                    action={handleOnPress}
                >
                    <Text style={CustomStyles.confirmOrderButton.text}>Manage order</Text>
                </CustomPressable>
            </View>
        </View>
    );
};

Cart.displayName = Cart.name;

export { Cart };