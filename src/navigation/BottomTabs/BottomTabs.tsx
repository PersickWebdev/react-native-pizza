import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOptions, CartScreenOptions } from '@/navigation/BottomTabs/BottomTabs.data';
import { ProductListScreen } from '@/screens/ProductListScreen';
import { FeedbackScreen } from '@/screens/FeedbackScreen';
import { CartScreen } from '@/screens/CartScreen';

export type TabType = {
    Products: undefined;
    Feedback: undefined;
    Contacts: undefined;
}

const Tab = createBottomTabNavigator<TabType>();

const TabGroup = () => {
    return (
        <Tab.Navigator screenOptions={TabOptions}>
            <Tab.Screen name='Products' component={ProductListScreen}/>
            <Tab.Screen name='Feedback' component={FeedbackScreen}/>
            <Tab.Screen name='Cart' component={CartScreen} options={CartScreenOptions}/>
        </Tab.Navigator>
    );
};

export { TabGroup };