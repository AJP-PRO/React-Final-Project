import React, { useEffect } from "react";

const DataFetcher = ({ searchTerm }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies2 = await fetch(
          `https://www.omdbapi.com/?apikey=a7412df9&s=${searchTerm}`
        );
        const movieData2 = await movies2.json();

        console.log(movieData2.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <p>Child is fetching data....</p>
    </div>
  );
};

export default DataFetcher;
