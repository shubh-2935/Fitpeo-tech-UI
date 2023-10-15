import React from 'react';
import img1 from '../images/megaImage1.png';
import img2 from '../images/images.png';
function MainBox() {
    return (
    <div className='MainBoxMain'>
        <div className='MainBox1'>
            <h3 style={{margin: `10px 20px 0 0`}}>Overview</h3>
            <p style={{color: 'silver', marginTop: `5px`}}>Monthly Earning</p>
            <img className='MainBox1image' src={img1} />
        </div>
        <div style={{paddingLeft: `10px`}} className='MainBox2'>
            <h3 style={{fontSize: 'bold', margin: `10px 20px 0 0`}}>Customer</h3>
            <p style={{color: 'silver', marginTop: `5px`}}>Customer that buy products</p>
            <img className='MainBox1image2' src={img2} />
        </div>
    </div>
    )
}

export default MainBox;