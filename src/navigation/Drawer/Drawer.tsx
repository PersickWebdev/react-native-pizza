import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerData } from '@/navigation/Drawer/Drawer.data';
import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeStackGroup, HomeStackType } from '@/navigation/NativeStack';
import { SettingsScreen } from '@/screens/SettingsScreen';
import { ContactsScreen } from '@/screens/ContactsScreen';

export type DrawerType = {
    Products: NavigatorScreenParams<HomeStackType>;
    Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerType>();

const DrawerGroup = () => {
    return (
        <Drawer.Navigator screenOptions={DrawerData.screenOptions}>
            <Drawer.Screen name="Home" component={HomeStackGroup}/>
            <Drawer.Screen name="Contacts" component={ContactsScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    );
};

export { DrawerGroup };