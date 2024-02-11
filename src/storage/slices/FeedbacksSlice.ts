import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
export const { setFeedbacks } = FeedbackSlice.actions;
