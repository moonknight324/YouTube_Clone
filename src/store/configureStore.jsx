import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../features/youtube/YouTubeSlice"

const store = configureStore({
    reducer:{
        youtubeApp: youtubeReducer,
        
    }
})

export default store;