import React from 'react'
import NavBackground from "../assets/LoTR_Ring background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
  return (
    <section id="landing">
        <nav>
            <div class="row">
                <div class="nav__container">
                    <div class="background">
                        <img class="background__img" src={NavBackground} alt=""></img>
                    </div>
                    <div class="nav__wrapper">
                        <div class="logo">
                        <FontAwesomeIcon icon="fa-solid fa-clapperboard" />
                            <h1 class="logo__title">LoTR Media</h1>
                        </div>
                        <ul class="nav__links">
                            <li><a href="#" class="nav__link">Home</a></li>
                            <li><a href="#search__results" class="nav__link">Find Media</a></li>
                            <li><a href="#" class="nav__link">Contact</a></li>
                        </ul>
                    </div>
                    <div class="search__wrapper">
                        <h1 class="nav__title"> Browse the Epics</h1>
                        <div class="search__wrapper--icon">
                            <input class="search__bar" type="text" placeholder="Search by production year, title, or keyword" onchange="onSearchChange(event)"/>
                            <FontAwesomeIcon icon="faMagnifyingGlass" className="fa-magnifying-glass"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Nav