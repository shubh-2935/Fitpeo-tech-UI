import React from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
function SmallBox({imgName, info}) {
    return (
        <div className="EachSmallbox">
            <img className="smallImagediv" alt="imgName1" src={imgName}></img>    
            <div style={{marginLeft: `10px`}}>
                <span className="Earningtag">{info.name}</span>
                <br></br>
                <h2 className="priceh2tag">{info.price}</h2>
                
               <span style={{color: info.color}}>{info.about}</span> this month
            </div>
        </div>
    )
}

export default SmallBox;