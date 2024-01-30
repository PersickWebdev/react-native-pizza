import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOptions } from '@/navigation/BottomTabs/BottomTabs.data';
import { ProductListScreen } from '@/screens/ProductListScreen';
import { FeedbackScreen } from '@/screens/FeedbackScreen';
import { ContactsScreen } from '@/screens/ContactsScreen';

const Tab = createBottomTabNavigator();

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