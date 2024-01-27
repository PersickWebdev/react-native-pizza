import { Alert, Share } from 'react-native';

export const onShare = async (shareLink: string) => {
    try {
        const result = await Share.share({
            message: shareLink,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                console.log('result.activityType: ', result.activityType);
            }
        } else if (result.action === Share.dismissedAction) {
            console.log('dismissedAction');

        }
    } catch(error: any) {
        Alert.alert(error.message);
    }
};