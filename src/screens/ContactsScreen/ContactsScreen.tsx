import React, { FC, ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, KeyboardAvoidingView, View, Text, Linking } from 'react-native';
import { Data } from '@/screens/ContactsScreen/ContactsScreen.data';
import { GlobalStyles } from '@/styles/global';
import { styles } from './CotnactsScreen.styles';

type ContactsScreenProps = {};

const ContactsScreen: FC<ContactsScreenProps> = ({}: ContactsScreenProps): ReactElement => {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
            <KeyboardAvoidingView
                style={GlobalStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.container}>
                    <View style={styles.section}>
                        <View style={[styles.sectionTitle, styles.sectionTitleNoTopBorder]}>
                            <Text style={styles.sectionTitleText}>
                                Where to find us?
                            </Text>
                        </View>
                        <View style={styles.sectionContent}>
                            <Text style={styles.sectionContentText}>
                                There is no actual physical address of our whereabouts.
                                We work online only so feel free to use our comfortable
                                application and make your orders. Our experienced support team is
                                online 24/7 so no issue will stay unsolved.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.sectionTitleText}>
                                Contact us
                            </Text>
                        </View>
                        <View style={styles.sectionContent}>
                            <Text style={styles.sectionContentText}>
                                You can contact us any time any day using the following information.
                                Our support team will be glad to help you.
                            </Text>
                            <View style={styles.sectionContentInfoBox}>
                                <View style={styles.sectionContentInfo}>
                                    <Text style={[styles.sectionContentText, styles.textBold]}>
                                        Website:
                                    </Text>
                                    <Text
                                        style={[styles.sectionContentText, styles.textBold]}
                                        onPress={() => Linking.openURL(Data.website.url)}
                                    >
                                        {Data.website.label}
                                    </Text>
                                </View>
                                <View style={styles.sectionContentInfo}>
                                    <Text style={[styles.sectionContentText, styles.textBold]}>
                                        Phone:
                                    </Text>
                                    <Text
                                        style={[styles.sectionContentText, styles.textBold]}
                                        onPress={() => Linking.openURL(Data.phone)}
                                    >
                                        {Data.phone}
                                    </Text>
                                </View>
                                <View style={styles.sectionContentInfo}>
                                    <Text style={[styles.sectionContentText, styles.textBold]}>
                                        Email:
                                    </Text>
                                    <Text
                                        style={[styles.sectionContentText, styles.textBold]}
                                        onPress={() => Linking.openURL(Data.phone)}
                                    >
                                        {Data.email}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

ContactsScreen.displayName = ContactsScreen.name;

export { ContactsScreen };