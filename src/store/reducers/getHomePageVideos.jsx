
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utils/parseData";

const API_KEY = "AIzaSyBqtmhD0OD9rvs3hksMJIWV7Hqj9p4Aob0";
// const API_KEY = process.env.VITE_APP_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async (isNext, { getState }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
        } = getState();

        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    maxResults: 20,
                    q: "CodeWithHarry",
                    key: API_KEY,
                    part: "snippet",
                    type: "video",
                },
            });

            console.log(response.data.items);
            const items = response.data.items;
            console.log(items);

            const parsedData = await parseData(items);

            
        } catch (error) {
            console.error("Error fetching home page videos:", error);
            throw error;
        }
    }
);
