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

                if(movieData.Search)
                {
                    onDataFetch(mediaData);
                }               
            }
            catch (error) {
                console.error('Error fetching data:', error)
            }
        };
        fetchData();
    },[onDataFetch]);   

    return <div><p>Child is fetching data....</p></div>
};

export default DataFetcher