import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import { DrawerData } from '@/navigation/Drawer/Drawer.data';
import { HomeStackGroup, HomeStackType } from '@/navigation/NativeStack';
import { SettingsScreen } from '@/screens/SettingsScreen';

export type DrawerType = {
    Products: NavigatorScreenParams<HomeStackType>;
    Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerType>();

const DrawerGroup = () => {
    return (
        <Drawer.Navigator screenOptions={DrawerData.screenOptions}>
            <Drawer.Screen name="Home" component={HomeStackGroup}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    );
};

export { DrawerGroup };