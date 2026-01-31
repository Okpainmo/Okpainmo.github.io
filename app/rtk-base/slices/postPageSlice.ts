import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateSpecs = {
  showPostImageZoomModal: boolean;
  zoomModalImage: {
    imageUrl: string;
    imageAltText: string;
  } | null;
};

const initialState: InitialStateSpecs = {
  showPostImageZoomModal: false,
  zoomModalImage: null
};

const postPageSlice = createSlice({
  name: 'postPage',
  initialState,
  reducers: {
    togglePostImageZoomModal: (state, action) => {
      state.showPostImageZoomModal = action.payload;
    },
    setZoomModalImage: (state, action) => {
      state.zoomModalImage = {
        imageUrl: action.payload.imageUrl,
        imageAltText: action.payload.imageAltText
      };
    }
  }
});

export const { togglePostImageZoomModal, setZoomModalImage } =
  postPageSlice.actions;
export default postPageSlice.reducer;
