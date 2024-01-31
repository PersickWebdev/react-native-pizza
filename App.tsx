import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ProductListScreen } from '@/screens/ProductListScreen/ProductListScreen';
import { store } from '@/storage/store';
import { Navigation } from "@/navigation";
import {COLORS} from "@/constants/colors";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Navigation/>
                {/*<NavigationContainer>*/}
                {/*    <StatusBar style="light" />*/}
                {/*    <ProductListScreen />*/}
                {/*</NavigationContainer>*/}
            </SafeAreaProvider>
        </Provider>
    );
};
