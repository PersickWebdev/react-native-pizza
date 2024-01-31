import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackData } from '@/navigation/NativeStack/NativeStack.data';
import { TabGroup, TabType } from '@/navigation/BottomTabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { Product } from '@/components/sections/ProductList/ProductCard/ProductCard.types';
import { ProductScreen } from '@/screens/ProductScreen/ProductScreen';

export type HomeStackType = {
    TabGroup: NavigatorScreenParams<TabType>;
    ProductScreen: { item: Product };
}

const HomeStack = createStackNavigator<HomeStackType>();

const HomeStackGroup = () => {
    return (
        <HomeStack.Navigator screenOptions={NativeStackData.screenOptions}>
            <HomeStack.Screen name='TabGroup' component={TabGroup}/>
            <HomeStack.Screen
                name='ProductScreen'
                component={ProductScreen}
                options={NativeStackData.productsScreenOptions}
            />
        </HomeStack.Navigator>
    );
};

export { HomeStackGroup };