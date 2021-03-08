import React from 'react'
import './PageNotFound.css'
import hello from '../../images/Charco - Pet.png'
const PageNotFound = () => {
    return (
        <div className="hello">
            <img src={hello} alt="404"/>
            404 Page Not Found
        </div>
    )
}

export default PageNotFound
