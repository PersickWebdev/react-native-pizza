import React, { FC, ReactElement } from 'react';
import {
    FlatList,
    ListRenderItem,
    View,
    RefreshControl
} from 'react-native';
import { FeedbackCard } from './FeedbackCard/FeedbackCard';
import { Feedback } from '@/components/sections/FeedbackList/FeedbackCard/FeedbackCard.types';
import { Empty } from '@/components/global/Empty';
import { COLORS } from '@/constants/colors';
import { styles } from './FeedbackList.styles';

type FeedbackListProps = {
    items: Feedback[];
    isRefreshing: boolean;
    handleOnRefresh: () => void;
    handleOnEndReached: () => void;
};

const FeedbackList: FC<FeedbackListProps> = ({
    items,
    isRefreshing,
    handleOnRefresh,
    handleOnEndReached,
}): ReactElement => {
    const renderItem: ListRenderItem<Feedback[][number]> = ({ item }) => (
        <FeedbackCard {...item}/>
    );

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={items}
                keyboardShouldPersistTaps="handled"
                renderItem={renderItem}
                ListEmptyComponent={<Empty message='No results ...' />}
                onEndReached={handleOnEndReached}
                onEndReachedThreshold={0}
                refreshControl={
                    <RefreshControl
                        tintColor={COLORS.cream}
                        refreshing={isRefreshing}
                        onRefresh={handleOnRefresh}
                    />
                }
            />
        </View>
    );
};

FeedbackList.displayName = FeedbackList.name;

export { FeedbackList };
