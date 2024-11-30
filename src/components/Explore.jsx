import React, { useState } from 'react'
import  DataFetcher from '../components/ui/DataFetcher'

const Explore = ({ setFilter, filter }) => {
const [ dataFromChild, setDataFromChild ] = useState(null);

const handleChildData = (data) => {
  console.log('data received from child: ', data);
  setDataFromChild(data);
};

const filterMedia = (event) => {
  setFilter(event.target.value)
}

  return (
    <>
      <section className="search__results">
        <h1 className="search__h1">Search Results: </h1>
        <select id="filter" defaultValue={filter} onChange={filterMedia}>
            <option defaultValue="" disabled selected>Sort</option>
            <option defaultValue="OLD_TO_NEW">Production date, old to new</option>
            <option defaultValue="NEW_TO_OLD">Production date, new to old</option>
            <option defaultValue="GAMES">Games</option>
            <option defaultValue="MOVIES">Movies</option>
        </select>
      </section>
    <section className="media__section">
        <div className="media media__style">
            <i className="fas fa-spinner books__loading--spinner"></i>
        </div>
        <div>
      <h1>Parent Component</h1>
      {dataFromChild && <p>Data from Child: {JSON.stringify(dataFromChild)}</p>}
      <DataFetcher onDataFetch={handleChildData} />
    </div>
    </section>
    </>
  )
}



export default Explore