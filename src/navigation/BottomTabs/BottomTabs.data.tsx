import { ComponentProps } from 'react';
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
                case 'Contacts': {
                    iconName = focused ? 'phone-portrait' : 'phone-portrait-outline';
                    iconColor = focused ? COLORS.golden : COLORS.cream;
                    break;
                }
            }

            return <Ionicons name={iconName} size={size} color={iconColor}/>
        }
    }
};