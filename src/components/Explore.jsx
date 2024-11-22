import React from 'react'

const Explore = () => {
  return (
      <section class="search__results">
        <h1 class="search__h1">Search Results: </h1>
        <select id="filter" // onchange="filterMedia(event)">
            <option value="" disabled selected>Sort</option>
            <option value="OLD_TO_NEW">Production date, old to new</option>
            <option value="NEW_TO_OLD">Production date, new to old</option>
            <option value="GAMES">Games</option>
            <option value="MOVIES">Movies</option>
        </select>
      </section>
    <section class="media__section">
        <div class="media media__style">
            <i class="fas fa-spinner books__loading--spinner"></i>
        </div>
    </section>
  )
}

export default Explore