import { ComponentProps } from 'react';
import { useTypedSelector } from '@/hooks/useReactRedux';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';


export const TabOptions = ({ route }) => {
    const routeName = route.name;

    return {
        headerShown: false,
        tabBarActiveTintColor: COLORS.golden,
        tabBarInactiveTintColor: COLORS.cream,
        tabBarStyle: {
            backgroundColor: COLORS.graphite,
        },
        tabBarIcon: ({ size, focused }) => {
            let iconName: ComponentProps<typeof Ionicons>['name'] = 'alert';
            let iconColor: ComponentProps<typeof Ionicons>['color'] = COLORS.cream;

            switch (routeName) {
                case 'Products': {
                    iconName = focused ? 'list' : 'list-outline';
                    iconColor = focused ? COLORS.golden : COLORS.cream;
                    break;
                }
                case 'Feedback': {
                    iconName = focused ? 'heart' : 'heart-outline';
                    iconColor = focused ? COLORS.golden : COLORS.cream;
                    break;
                }
                case 'Cart': {
                    iconName = focused ? 'cart' : 'cart-outline';
                    iconColor = focused ? COLORS.golden : COLORS.cream;
                    break;
                }
            }

            return <Ionicons name={iconName} size={size} color={iconColor}/>
        }
    };
};

export const CartScreenOptions = () => {
    const { totalItemsCount } = useTypedSelector((state) => state.Cart);

    const Options = {
        tabBarBadgeStyle: {
            fontWeight: '500',
            color: COLORS.graphite,
            backgroundColor: COLORS.greenMedium,
        },
    };

    if (totalItemsCount) {
        //@ts-ignore
        Options.tabBarBadge = totalItemsCount;
    }

    return Options;
};