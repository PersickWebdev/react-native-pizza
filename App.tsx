import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '@/storage/store';
import { Navigation } from "@/navigation";


export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Navigation/>
            </SafeAreaProvider>
        </Provider>
    );
};
