import axios from "axios";

const API_KEY = "AIzaSyACY7BFlnp6XUGnW6JWAhnFS9DLOAVtDRs";

const parseVideoDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = (match[1] || 0) && parseInt(match[1], 10);
  const minutes = (match[2] || 0) && parseInt(match[2], 10);
  const seconds = (match[3] || 0) && parseInt(match[3], 10);

  return `${hours ? hours + 'h ' : ''}${minutes ? minutes + 'm ' : ''}${seconds ? seconds + 's' : ''}`;
};

const convertRawtoString = (rawValue) => {
  return String(rawValue);
};


const timeSince = (date) => {

  return 'Calculate time since logic here';
};


const parseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];

    items.forEach((item) => {
      channelIds.push(item.snippet.channelId);
      videoIds.push(item.id.videoId);  // Corrected from item.id.videoIds to item.id.videoId
    });

    const {
      data: { items: channelsData },  // Corrected from item to items
    } = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`
    );

    const parsedChannelsData = [];
    channelsData.forEach((channel) =>
      parsedChannelsData.push({
        id: channel.id,
        image: channel.snippet.thumbnails.default.url,
      })
    );

    const {
      data: { items: videosData },  // Corrected from item to items
    } = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parseData = [];
    items.forEach((item, index) => {
      const { image: channelImage } = parsedChannelsData.find(
        (data) => data.id === item.snippet.channelId
      );
      if (channelImage) {
        parseData.push({
          videoId: item.id.videoData,  // Corrected from item.id.videoData to item.id.videoId
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          



          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videoViews: convertRawtoString(
            videosData[index].statistics.viewCount
          ),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },



          
        });
      }
    });

    return parseData;
    
  } catch (err) {
    console.log(err);
  }
};



export default parseData;
