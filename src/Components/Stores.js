import React from 'react'
import StoresTogether from '../Assets/storesTogether.png'

function Stores(props){
    
    return(
        <div className="stores-container">
            <img width="100%" height="auto" src={StoresTogether} alt="stores"></img>
     
            <div className="stores-name">
                <div className="stores-text-block name1">Petrolina</div>
                <div className="stores-text-block name2">Juazeiro</div>
                <div className="stores-text-block name3">Bonfim</div>
            </div>
            
        </div>
    )
}

export default Stores