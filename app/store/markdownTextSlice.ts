import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


const initialState: { loading: boolean, markdownText: string} = {
  loading: false,
  markdownText: ''
}
const markdownTextSlice = createSlice({
  name: 'markdownText',
  initialState,
  reducers: {
    setMarkDownData: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      if(payload?.length !== 0) {
        state.markdownText = payload;
      } else {
        state.markdownText = 'There is no text data from OpenAI';
      }
    },
    setLoading: (state, action:  PayloadAction<boolean>) =>{
      const { payload } = action;
        state.loading = payload;
    }
  },
});

export const { setMarkDownData, setLoading } = markdownTextSlice.actions;
export default markdownTextSlice.reducer;
