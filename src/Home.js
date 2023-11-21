import React, { useState } from "react";
import './Home.css';
import LocalWeather from './LocalWeather'

function HomeDisplay(){
    const filler = "Lorem ipsum dolor sit amet, eius saperet instructior est id, sumo voluptua mandamus eam ne. Solum aeterno perpetua vix ne. Mea soleat postea propriae te. Putent efficiantur neglegentur et qui, eos meliore senserit expetenda ea, quem quis offendit vel ad. His facilis oportere ea, ubique luptatum constituto vim ne, commodo placerat vituperata et sea. Movet detraxit cu eos, enim aliquip voluptua cu mel, eu nisl aperiam contentiones est. Ne vero saperet similique vix, cum cu harum mollis, error elitr primis sed eu.    Vel soleat commodo ut, eu tempor tincidunt usu. Assum utamur numquam eos cu, et nihil altera eam. Ei duo viris inermis, et utroque tibique est. Eu mei fastidii instructior, sed ad viris animal.    Cu nec zril saperet interesset. Ea ius modo albucius. Id sea affert mentitum interpretaris. An recusabo partiendo has, mazim altera viderer his ei.    Id mei vide intellegat. Eam quas zril signiferumque ut, usu ea laoreet atomorum petentium. Mea nihil equidem deseruisse ei, putant saperet no eam. Posse impedit cu has, cum semper doctus in. Nostrum scribentur an sea. Has oblique argumentum ne, ut vis deserunt consulatu adversarium, per enim apeirian id.    Sale quodsi fuisset cu mea, eum ut dicant dolore tractatos, no consequat quaerendum eos. Et his omittantur dissentiunt, persius deserunt sit ex. Has ad mucius nusquam, nisl illum eum an. Nemore scripta eu sed, possit equidem necessitatibus vim ea."
    const [isClicked, setIsClicked] = useState(false)

    function handleToggle(){
        setIsClicked(!isClicked)
        let localWeather = document.getElementById('weatherAside')
        let contentDiv = document.getElementById("content")
        if (isClicked === true) {
            localWeather.style.display = "none"
            contentDiv.style.gridColumn = "span 2"
         } else{ 
            localWeather.style.display = "block"
            contentDiv.style.gridColumn = "1 / 1"
         }
    }

    return (
        <div className='homeDisplay'>
            <div id='content'>
                <div id="contentHeader">
                    <h2>Your home page        </h2>
                    <form>
                        <label htmlFor="showWeather">Click here for local weather</label>
                        <input type="checkbox" 
                        id="showWeather" 
                        checked={isClicked}
                        onChange={handleToggle}
                        value={isClicked}
                        ></input>
                    </form>
                </div>
                <p>{filler}</p>
                <p>{filler}</p>
                <p>{filler}</p>
                <p>{filler}</p>
            </div>
            <div className='aside' id="weatherAside">
                <LocalWeather />
            </div>
        </div>
    )
}

export default HomeDisplay