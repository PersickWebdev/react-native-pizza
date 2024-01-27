import React, { FC, ReactElement, useState } from 'react';
import { View, Image } from 'react-native';
import { setSearchValue } from '@/storage/slices/FilterSlice';
import { useTypedDispatch } from '@/hooks/useReactRedux';
import { CustomPressable } from '@/components/ui/CustomPressable/CustomPressable';
import { Input } from '@/components/ui/Input';
import { IMAGES } from '@/constants/images';
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
          <Image style={styles['panel__picture']} source={IMAGES.misc.open} />
        </CustomPressable>
        <CustomPressable action={handleOpenSearch} dismissKeyboard={!isSearchVisible}>
          <Image
            style={styles['panel__picture']}
            source={IMAGES.misc['magnifying-glass']}
          />
        </CustomPressable>
      </View>
    </View>
  );
};

ActionPanel.displayName = ActionPanel.name;

export { ActionPanel };
