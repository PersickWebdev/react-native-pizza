import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/storage/store';

type InitialState = {
    feedbacks: [];
};

const FeedbackSlice = createSlice({
    name: 'Feedbacks',
    initialState: {
        feedbacks: [],
    },
    reducers: {
        setFeedbacks: (state: InitialState, action: PayloadAction<[]>) => {
            state.feedbacks = action.payload;
        },
    }
});

export default FeedbackSlice.reducer;

export const selectFeedbacks = (state: RootState) => state.Feedbacks.feedbacks;

export const { setFeedbacks } = FeedbackSlice.actions;
