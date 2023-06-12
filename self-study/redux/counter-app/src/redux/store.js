import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter : counterReducer,
    },
});

//index.js de componentlerimizin tamamını haberdar etmek için 
//store u Provider ile sarmalıyoruz
//store global statemizdeki tüm elemanları barındıran bir objedir