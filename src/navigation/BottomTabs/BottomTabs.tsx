import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOptions } from '@/navigation/BottomTabs/BottomTabs.data';
import { ProductListScreen } from '@/screens/ProductListScreen';
import { FeedbackScreen } from '@/screens/FeedbackScreen';
import { ContactsScreen } from '@/screens/ContactsScreen';

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
            <Tab.Screen name='Contacts' component={ContactsScreen}/>
        </Tab.Navigator>
    );
};

export { TabGroup };