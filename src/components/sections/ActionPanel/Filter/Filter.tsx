import React, { FC, ReactElement, useState, useEffect } from 'react';
import { View } from 'react-native';
import { setFilterOption } from '@/storage/slices/FilterSlice';
import { useTypedDispatch, useTypedSelector } from '@/hooks/useReactRedux';
import { CustomCheckbox } from '@/components/ui/CustomCheckbox';
import { styles } from './Filter.styles';

type FilterProps = {};

const Filter: FC<FilterProps> = ({}: FilterProps): ReactElement => {
    const dispatch = useTypedDispatch();
    const { filterOption } = useTypedSelector((state) => state.Filter);
    const [ filterData, setFilterData ] = useState<string>(filterOption);

    useEffect(() => {
        dispatch(setFilterOption(filterData));
    }, [filterData, filterOption]);

    return (
        <View style={styles.container}>
            <CustomCheckbox
                label='New only'
                value='isNew'
                formData={filterData}
                setFormData={setFilterData}
            />
        </View>
    );
};

Filter.displayName = Filter.name;

export { Filter };
