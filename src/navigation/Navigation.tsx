import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {ProductListScreen} from "@/screens/ProductListScreen";

const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <ProductListScreen />
        </NavigationContainer>
    );
};

export { Navigation };