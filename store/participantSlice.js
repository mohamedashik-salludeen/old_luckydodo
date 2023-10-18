import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    participantions: [],
};

const participantSlice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        setParticipations(state, action) {
            state.participantions = action.payload.data.map((participation) => participation.productId);
        },
        addParticipation(state, action) {
            state.participantions.push(action.payload.productId);
        },
        deleteParticipation(state, action) {
            state.participantions = state.participantions.filter((id) => id !== action.payload.productId);
        },
    },
});

export const { setParticipations, addParticipation } = participantSlice.actions;
export default participantSlice;
