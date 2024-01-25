import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ProductListScreen } from '@/screens/ProductListScreen/ProductListScreen';
import { store } from '@/storage/store';

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar style="light" />
                <ProductListScreen />
            </SafeAreaProvider>
        </Provider>
    );
};
