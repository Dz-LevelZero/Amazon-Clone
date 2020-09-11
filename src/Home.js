import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            </div>

            <div className="home__row">
                <Product 
                    title= "Rich Dad Poor Dad"
                    price= {19.68}
                    image= "https://m.media-amazon.com/images/I/51bX4hDuBIL.jpg"
                    rating= {5}           
                />
                <Product 
                    title= "World of Warcraft: Battle for Azeroth"
                    price= {51.99}
                    image= "https://s2.gaming-cdn.com/images/products/4591/271x377/world-of-warcraft-battle-for-azeroth-deluxe-edition-cover.jpg"
                    rating= {3}
                />
                
            </div>

            <div className="home__row">
                <Product 
                    title= "Smartwatch "
                    price= {39.99}
                    image= "https://www.amazon.fr/images/I/514Y7g-JQDL._AC_UL320_.jpg"
                    rating= {4}
                />
                <Product 
                    title= "ASUS ROG Phone 3"
                    price= {949.00}
                    image= "https://www.amazon.fr/images/I/71VcgBG3c8L._AC_UL320_.jpg"
                    rating= {5}
                />
                <Product 
                    title= "Summerone Casque stéréo Gaming"
                    price= {78.29}
                    image= "https://www.amazon.fr/images/I/61SRQG0orEL._AC_UL320_.jpg"
                    rating= {3}
                />
            </div>

            <div className="home__row">
                <Product 
                    title= "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price= {1094.98}
                    image= "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating= {4}
                />
            </div>
        </div>
    )
}

export default Home


                    