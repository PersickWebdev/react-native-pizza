import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Animated,
    RefreshControl,
    ListRenderItem,
    Dimensions,
} from 'react-native';
import { Slide } from './Slide/Slide';
import { SlideItem } from './Slider.types';
import { styles } from './Slider.styles';

const { width } = Dimensions.get('window');

let flatlist;

function infiniteScroll(dataList) {
    const numberOfData = dataList.length;
    let scrollValue = 0,
        scrolled = 0;

    setInterval(function () {
        scrolled++;
        if (scrolled < numberOfData) scrollValue = scrollValue + width;
        else {
            scrollValue = 0;
            scrolled = 0;
        }

        this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
    }, 3000);
}

const Slider = ({ data }) => {
    const [ dataList, setDataList ] = useState(data);
    const [ stopTimeout, setStopTimeout ] = useState(false);
    const [ refreshing, setRefreshing ] = React.useState(false);
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    const renderItem: ListRenderItem<SlideItem[][number]> = ({ item }) => (
        <Slide item={item} setStopTimeout={setStopTimeout} />
    );

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    }, []);

    const AnimatedEvent = Animated.event([
        {
            nativeEvent: {
                contentOffset: {
                    x: scrollX
                }
            }
        },
    ]);

    const indicators = data.map((item, index) => {
        let opacity = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
        });

        return (
            <Animated.View
                key={item.id}
                style={[styles.indicatorAnimated, { opacity }]}
            />
        );
    });

    useEffect(() => {
        setDataList(data);

        setTimeout(() => {
            infiniteScroll(dataList);
        }, 5000);

    }, [stopTimeout]);

    return (
        <View>
            <FlatList
                ref={(flatList) => {this.flatList = flatList}}
                data={data}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment='center'
                decelerationRate='fast'
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                onScroll={AnimatedEvent}
            />
            <View style={styles.indicator}>
                {indicators}
            </View>
        </View>
    );
};

export { Slider };