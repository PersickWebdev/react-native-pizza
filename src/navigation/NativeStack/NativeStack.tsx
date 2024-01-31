import { createStackNavigator } from '@react-navigation/stack';
import { TabGroup } from '@/navigation/BottomTabs';
import { ProductScreen } from '@/screens/ProductScreen/ProductScreen';

const HomeStack = createStackNavigator();

const HomeStackGroup = () => {

    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name='TabGroup' component={TabGroup}/>
            <HomeStack.Screen
                name='ProductScreen'
                component={ProductScreen}
                options={{
                    presentation: 'modal',
                    headerShown: false,

                }}
            />
        </HomeStack.Navigator>
    );
};

export { HomeStackGroup };