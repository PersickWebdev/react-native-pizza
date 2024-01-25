import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProductListScreen } from '@/screens/ProductListScreen/ProductListScreen';

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <ProductListScreen />
        </SafeAreaProvider>
    );
};
