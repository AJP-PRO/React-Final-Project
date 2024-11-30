import React, { useEffect } from 'react'

const DataFetcher = ({onDataFetch}) =>{
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('https://omdbapi.com/?apikey=a7412df9&s=lord%20of%20the%20rings');
                const result = await response.json();
                onDataFetch(result);
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