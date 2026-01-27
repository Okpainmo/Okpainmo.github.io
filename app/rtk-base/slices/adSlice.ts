import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ads } from '@/app/data/ads';

export interface Ad {
  id: string;
  title: string;
  intro: string;
  imageUrl: string;
  link: string;
}

interface AdState {
  currentAd: Ad | null;
  isVisible: boolean;
  adPool: Ad[];
  nextAdIndex: number;
}

const dummyAds: Ad[] = ads;

const initialState: AdState = {
  currentAd: null,
  isVisible: false,
  adPool: dummyAds,
  nextAdIndex: 0
};

const adSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    showNextAd: (state) => {
      state.currentAd = state.adPool[state.nextAdIndex];
      state.isVisible = true;
      state.nextAdIndex = (state.nextAdIndex + 1) % state.adPool.length;
    },
    closeAd: (state) => {
      state.isVisible = false;
    }
  }
});

export const { showNextAd, closeAd } = adSlice.actions;
export default adSlice.reducer;
