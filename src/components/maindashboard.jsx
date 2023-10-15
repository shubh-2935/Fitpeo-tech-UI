import React from "react";
import SmallBox from "./smallBox";
import MainBox from "./mainBox";
import imgName1 from "../images/smallImg1.png";
import imgName2 from "../images/smallImg2.png";
import imgName3 from "../images/smallImg3.png";
import imgName4 from "../images/smallImg4.jpg";
function Maindashboard()  {

    let obj1 = {
        name: "Earning",
        price: "$198k",
        about: "+37.8%",
        color: "green"
    }

    let obj2 = {
        name: "Orders",
        price: "$2.4k",
        about: "-2%",
        color: "red"
    }
    let obj3 = {
        name: "Balance",
        price: "$2.4k",
        about: "-2%",
        color: "red"
    }
    let obj4 = {
        name: "Total Sales",
        price: "$89k",
        about: "+11%",
        color: "green"
    }
    return (<div>
        <div className="Smallbox">
            <SmallBox imgName={imgName1} info={obj1}/>
            <SmallBox imgName={imgName2} info={obj2}/>
            <SmallBox imgName={imgName3} info={obj3}/>
            <SmallBox imgName={imgName4} info={obj4}/>
        </div>
        <div className="mainbox">
            <MainBox />
        </div>
    </div>
    )
}
export default Maindashboard;