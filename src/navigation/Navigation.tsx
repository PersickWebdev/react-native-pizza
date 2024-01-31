import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { DrawerGroup } from '@/navigation/Drawer';

const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <DrawerGroup />
        </NavigationContainer>
    );
};

export { Navigation };