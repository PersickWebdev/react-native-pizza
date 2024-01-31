import React, { FC, ReactElement, RefObject } from 'react';
import {
    FlatList,
    ListRenderItem,
    View,
    // RefreshControl
} from 'react-native';
import { ProductCard } from './ProductCard/ProductCard';
import { Product } from '@/components/sections/ProductList/ProductCard/ProductCard.types';
import { Empty } from '@/components/global/Empty';
import { styles } from './ProductList.styles';

type ProductsListProps = {
    items: Product[];
    ref: RefObject<FlatList>;
    // isRefreshing: boolean;
    // handleOnRefresh: () => void;
    // handleOnEndReached: () => void;
};

const ProductsList: FC<ProductsListProps> = ({
    items,
    // isRefreshing,
    // handleOnRefresh,
    // handleOnEndReached,
}): ReactElement => {

    const renderItem: ListRenderItem<Product[][number]> = ({ item }) => (
        <ProductCard {...item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={items}
                keyboardShouldPersistTaps="handled"
                renderItem={renderItem}
                ListEmptyComponent={<Empty message='No results ...' />}
                // onEndReached={handleOnEndReached}
                // onEndReachedThreshold={0}
                // refreshControl={
                //     <RefreshControl
                //         tintColor={COLORS.cream}
                //         refreshing={isRefreshing}
                //         onRefresh={handleOnRefresh}
                //     />
                // }
            />
        </View>
    );
};

ProductsList.displayName = ProductsList.name;

export { ProductsList };
