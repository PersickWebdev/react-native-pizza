import React, { FC, ReactElement, useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { setSearchValue } from '@/storage/slices/FilterSlice';
import { useTypedDispatch } from '@/hooks/useReactRedux';
import { CustomPressable } from '@/components/ui/CustomPressable/CustomPressable';
import { Input } from '@/components/ui/Input';
import { COLORS } from '@/constants/colors';
import { styles } from './ActionPanel.styles';

type ActionPanelProps = {
  setIsModalVisible?: (value: boolean) => void;
};

const ActionPanel: FC<ActionPanelProps> = ({
  setIsModalVisible,
}): ReactElement => {
  const dispatch = useTypedDispatch();
  const [ isSearchVisible, setIsSearchVisible ] = useState(false);
  const [ searchData, setSearchData ] = useState('');

  const handleOpenModal = () => {
    setIsModalVisible && setIsModalVisible(true);
  };

  const handleOpenSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleInputSubmit = () => {
    dispatch(setSearchValue(searchData));
  };

  return (
    <View style={styles['container']}>
      <Input
        placeholder="Search ..."
        customStyle={isSearchVisible ? 'is-visible' : ''}
        formData={searchData}
        setFormData={setSearchData}
        onSubmitHandler={handleInputSubmit}
        clearValue={!isSearchVisible}
      />
      <View style={styles['buttons']}>
        <CustomPressable action={handleOpenModal}>
          <Ionicons
              name='funnel-outline'
              size={22}
              color={COLORS.graphite}
          />
        </CustomPressable>
        <CustomPressable action={handleOpenSearch} dismissKeyboard={!isSearchVisible}>
          <Ionicons
              name='search-outline'
              size={22}
              color={COLORS.graphite}
          />
        </CustomPressable>
      </View>
    </View>
  );
};

ActionPanel.displayName = ActionPanel.name;

export { ActionPanel };
