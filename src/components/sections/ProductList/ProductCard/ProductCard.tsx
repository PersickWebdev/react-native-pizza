import React, { FC, ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { IMAGES } from '@/constants/images';
import { styles } from './ProductCard.styles';

type ProductCardProps = {
    title: string;
    price: {
        new: string;
        old: string;
    };
    isNew: boolean;
    description: string;
    image: string;
};

const ProductCard: FC<ProductCardProps> = ({
    title,
    price,
    isNew,
    description,
    image,
}): ReactElement => {
    return (
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
                            <Text style={styles.priceGeneral}>{price?.new}</Text>
                        )}
                        <Text
                            style={[
                                styles.priceGeneral,
                                price?.new
                                    ? styles.priceOldLineThrough
                                    : styles.priceOld,
                            ]}>
                            {price?.old}
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
                    <View style={styles.actions}>
                        <Image style={styles.actionsCart} source={IMAGES.misc.cart} />
                    </View>
                </View>
                <View />
            </View>
        </View>
    );
};

ProductCard.displayName = ProductCard.name;

export { ProductCard };
