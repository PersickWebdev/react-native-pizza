import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    searchValue: string;
    filterOption: string;
};

const FilterSlice = createSlice({
    name: 'Filter',
    initialState: {
        searchValue: '',
        filterOption: '',
    },
    reducers: {
        setSearchValue: (state: InitialState, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setFilterOption: (state: InitialState, action: PayloadAction<string>) => {
            state.filterOption = action.payload;
        },
    }
});

export default FilterSlice.reducer;
export const { setSearchValue, setFilterOption } = FilterSlice.actions;
