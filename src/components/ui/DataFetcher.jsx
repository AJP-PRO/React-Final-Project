import React, { useEffect } from 'react'

const DataFetcher = ({onDataFetch}) =>{
    useEffect(() => {
        const fetchData = async () => {
            try {
                let mediaData =[];
                
                const movies = await fetch ('https://omdbapi.com/?apikey=a7412df9&s=lord%20of%20the%20rings');
                const movieData = await movies.json();
                const movies2 = await fetch("https://omdbapi.com/?apikey=a7412df9&s=lord%20of%20the%20rings");
                const movieData2 = await movies2.json();
                mediaData = [...movieData.Search, ...movieData2.Search];
                const mediaList = mediaData.map((media) => mediaHTML(mediaData)).join("");

                onDataFetch(mediaList);
            }
            catch (error) {
                console.error('Error fetching data:', error)
            }
        };
        fetchData();
    },[onDataFetch]);

    function mediaHTML(media) {
        return `<div class="media">
              <div class="media__wrapper">
                  <figure class="poster--wrapper">
                  <img class="poster" src="${media.Poster}" alt="">
                  </figure>
                  <div class="info__wrapper">
                  <div class="media__title">
                      ${media.Title}
                  </div>
                  <div class="media__type">
                      ${media.Type}
                  </div>
                   <div class="media__year">
                      ${media.Year}
                  </div>
                  </div>
              </div>
          </div>`;
      }

    return <div><p>Child is fetching data....</p></div>
};

export default DataFetcher