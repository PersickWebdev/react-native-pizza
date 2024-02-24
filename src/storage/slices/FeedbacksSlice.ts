import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/storage/store';
import { Feedback } from '@/components/sections/FeedbackList/FeedbackCard/FeedbackCard.types';

type InitialState = {
    feedbacks: Feedback[];
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
        addFeedback: (state: InitialState, action: PayloadAction<Feedback>) => {
            state.feedbacks = [...state.feedbacks, action.payload].reverse();
        },
    }
});

export default FeedbackSlice.reducer;

export const selectFeedbacks = (state: RootState) => state.Feedbacks.feedbacks;

export const { setFeedbacks, addFeedback } = FeedbackSlice.actions;
