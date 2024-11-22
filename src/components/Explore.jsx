import React from 'react'

const Explore = () => {


  return (
      <section className="search__results">
        <h1 className="search__h1">Search Results: </h1>
        <select id="filter" value={filter} onChange={filterMedia}>
            <option value="" disabled selected>Sort</option>
            <option value="OLD_TO_NEW">Production date, old to new</option>
            <option value="NEW_TO_OLD">Production date, new to old</option>
            <option value="GAMES">Games</option>
            <option value="MOVIES">Movies</option>
        </select>
      </section>
    <section className="media__section">
        <div className="media media__style">
            <i className="fas fa-spinner books__loading--spinner"></i>
        </div>
    </section>
  )
}



export default Explore