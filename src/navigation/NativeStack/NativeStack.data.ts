import { COLORS } from '@/constants/colors';

export const NativeStackData = {
    screenOptions: {
        headerShown: false,
    },
    productsScreenOptions: {
        headerStyle: {
            backgroundColor: COLORS.graphite,
        },
        headerTintColor: COLORS.golden,
        headerBackTitle: 'Pizzas',
        presentation: 'card',
        headerShown: true,
        title: ''
    },
};