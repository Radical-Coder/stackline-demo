import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
    imageIndex: number;
}

const initialState: ImageState = { imageIndex: 0 };

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImageIndex: (state, action: PayloadAction<number>) => {
            state.imageIndex = action.payload;
        },
    },
});

export const { setImageIndex } = imageSlice.actions;

export default imageSlice.reducer;