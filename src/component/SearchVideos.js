// import React, { useState } from 'react';
// import axios from 'axios';

// const API_KEY = 'AIzaSyATpw3kyIko-bOtAgagwmtjcQnP-29flrg'; // Replace with your actual YouTube Data API key
// const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

// const CHANNELS = {
//     "Channel One": "UCwAdQUuPT6laN-AQR17fe1g",
//     "Channel Two": "UCe3qdG0A_gr-sEdat5y2twQ",
//     "Channel Three": "UCsNxHPbaCWL1tKw2hxGQD6g",
//     "Channel Four": "UCtBp5FUvxIQV-3Dn4K_43-A"
// };

// function SearchVideos() {
//     const [videos, setVideos] = useState([]);
//     const [keyword, setKeyword] = useState('');

//     const handleSearch = async () => {
//         let allVideos = [];
//         for (const [channelName, channelId] of Object.entries(CHANNELS)) {
//             const params = {
//                 part: 'snippet',
//                 q: keyword,
//                 channelId: channelId,
//                 type: 'video',
//                 videoDuration: 'short',
//                 maxResults: 10,
//                 key: API_KEY
//             };
//             try {
//                 const response = await axios.get(YOUTUBE_API_URL, { params });
//                 const videoResults = response.data.items.map(item => ({
//                     title: item.snippet.title,
//                     videoId: item.id.videoId,
//                     thumbnail: item.snippet.thumbnails.default.url,
//                     embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`
//                 }));
//                 allVideos = [...allVideos, ...videoResults];
//             } catch (error) {
//                 console.error('Error fetching data: ', error);
//             }
//         }
//         setVideos(allVideos);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={keyword}
//                 onChange={e => setKeyword(e.target.value)}
//                 placeholder="Enter search keywords"
//             />
//             <button onClick={handleSearch}>Search</button>
//             <div>
//                 {videos.length > 0 ? (
//                     videos.map((video, index) => (
//                         <div key={index}>
//                             <h3>{video.title}</h3>
//                             <iframe
//                                 width="560"
//                                 height="315"
//                                 src={video.embedUrl}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No videos found.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default SearchVideos;

// ----------- Working part UPSIDE ^------------------------------------------------


// Trying new 

import React, { useState, useEffect, useRef } from 'react';
import axios, { all } from 'axios';
import './SearchVideos.css';
import { Button, Input } from '@nextui-org/react';

const API_KEY = "AIzaSyActmWwyoaEmmr1g-GdSbUtvbT2vPZBShI";
// {console.log(API_KEY)} // Replace with your actual YouTube Data API key
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

const CHANNELS = {
    "Channel One": "UCwAdQUuPT6laN-AQR17fe1g",
    "Channel Two": "UCe3qdG0A_gr-sEdat5y2twQ",
    "Channel Three": "UCsNxHPbaCWL1tKw2hxGQD6g",
    "Channel Four": "UCtBp5FUvxIQV-3Dn4K_43-A"
};


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

function SearchVideos() {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
    const [videos, setVideos] = useState(shuffleArray([
        {   
            "videoId": "2U-bBdorhh0",
            "thumbnail": "https://i.ytimg.com/vi/2U-bBdorhh0/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/2U-bBdorhh0?enablejsapi=1"
        },
        {
            "videoId": "Oj-i1TeYA94",
            "thumbnail": "https://i.ytimg.com/vi/Oj-i1TeYA94/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/Oj-i1TeYA94?enablejsapi=1"
        },
        {
            "videoId": "JMl7psYr7vM",
            "thumbnail": "https://i.ytimg.com/vi/JMl7psYr7vM/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/JMl7psYr7vM?enablejsapi=1"
        },
        {
            "videoId": "bhuGTz6rdaI",
            "thumbnail": "https://i.ytimg.com/vi/bhuGTz6rdaI/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/bhuGTz6rdaI?enablejsapi=1"
        },
        {
            "videoId": "glFjhWOxJBg",
            "thumbnail": "https://i.ytimg.com/vi/glFjhWOxJBg/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/glFjhWOxJBg?enablejsapi=1"
        },
        {
            "videoId": "QIE09qZhcjI",
            "thumbnail": "https://i.ytimg.com/vi/QIE09qZhcjI/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/QIE09qZhcjI?enablejsapi=1"
        },
        {
            "videoId": "--BL4qjDW8c",
            "thumbnail": "https://i.ytimg.com/vi/--BL4qjDW8c/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/--BL4qjDW8c?enablejsapi=1"
        },
        {
            "videoId": "Gr4ovlGy-uA",
            "thumbnail": "https://i.ytimg.com/vi/Gr4ovlGy-uA/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/Gr4ovlGy-uA?enablejsapi=1"
        },
        {
            "videoId": "4fMOnpYDLj8",
            "thumbnail": "https://i.ytimg.com/vi/4fMOnpYDLj8/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/4fMOnpYDLj8?enablejsapi=1"
        }
        ,
        {
            "videoId": "osB8BDH_S5k",
            "thumbnail": "https://i.ytimg.com/vi/osB8BDH_S5k/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/osB8BDH_S5k?enablejsapi=1"
        }
        ,{
            "videoId": "Jb8wM2PrMRM",
            "thumbnail": "https://i.ytimg.com/vi/Jb8wM2PrMRM/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/Jb8wM2PrMRM?enablejsapi=1"
        }
        ,{
            "videoId": "CXdsXHf37kw",
            "thumbnail": "https://i.ytimg.com/vi/CXdsXHf37kw/default.jpg",
            "embedUrl": "https://www.youtube.com/embed/CXdsXHf37kw?enablejsapi=1"
        }
    ]));
    const [keyword, setKeyword] = useState('');
    // const [flag, setflag] = useState(true)
    const videoRefs = useRef([]);

    const handleSearch = async () => {
        let allVideos = [];
        for (const [channelName, channelId] of Object.entries(CHANNELS)) {
            const params = {
                part: 'snippet',
                q: `financial videos on ${keyword} in ${selectedLanguage}`,
                type: 'video',
                videoDuration: 'short',
                maxResults: 10,
                key: API_KEY
            };
            try {
                console.log(`financial videos on ${keyword} in ${selectedLanguage}`)
                const response = await axios.get(YOUTUBE_API_URL, { params });
                const videoResults = response.data.items.map(item => ({
                    
                    videoId: item.id.videoId,
                    thumbnail: item.snippet.thumbnails.default.url,
                    embedUrl: `https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1`
                }));
                allVideos = [...allVideos, ...videoResults];
                // Experimental stuff down
                console.log(allVideos); 
                // allVideos = shuffleArray(allVideos);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        setVideos(allVideos);
    };

    useEffect(() => {
        
        const handleScroll = () => {
            videoRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                    const iframe = ref.querySelector('iframe');
                    if (isVisible) {
                        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else {
                        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [videos]);

    return (
        <div className="container">
            <div className="videos-container p-2">
                {videos.length > 0 ? (
                    videos.map((video, index) => (
                        <div key={index} className="video-wrapper" ref={el => videoRefs.current[index] = el}>
                            <h3>{video.title}</h3>
                            <iframe
                                width="100%"
                                height="100%"
                                src={video.embedUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))
                ) : (
                    <p>No videos found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchVideos;

