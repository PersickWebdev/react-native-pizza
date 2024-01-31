import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerData } from '@/navigation/Drawer/Drawer.data';
import { HomeStackGroup } from '@/navigation/NativeStack';
import { SettingsScreen } from '@/screens/SettingsScreen';

type DrawerType = {
    Products: undefined;
    Settings: undefined;
}

const Drawer = createDrawerNavigator<DrawerType>();

const DrawerGroup = () => {
    return (
        <Drawer.Navigator
            screenOptions={DrawerData.screenOptions}
        >
            <Drawer.Screen name="Home" component={HomeStackGroup}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    );
};

export { DrawerGroup };