import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerData } from '@/navigation/Drawer/Drawer.data';
import { TabGroup } from '@/navigation/BottomTabs/BottomTabs';
import { SettingsScreen } from '@/screens/SettingsScreen';
import {COLORS} from "@/constants/colors";

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
            <Drawer.Screen name="Home" component={TabGroup}
            //                options={{
            //     headerStyle: {
            //         backgroundColor: COLORS.graphite,
            //     },
            //     headerTintColor: COLORS.golden
            // }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    );
};

export { DrawerGroup };