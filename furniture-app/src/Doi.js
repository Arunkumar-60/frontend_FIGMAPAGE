import React from 'react';

function Doi() {
    return (
        <div class='conatiner-overlay'>
            <img src={`${process.env.PUBLIC_URL}/img/scan1.png`} class="img-fluid" alt="..."></img>
            <div class="centered-overlay custom-card text-start">
                <h5 >New Arrival</h5>
                <h2 class="text-capitalize">Discover Our New Collection</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button class="btn btn-custom">BUY NOW</button>

            </div>
            <div class="d-flex justify-content-evenly " id="arun1">
                <div class="d-flex justify-content-between">
                    <img src={`${process.env.PUBLIC_URL}/img/ICON_1.png`} class="img-fluid " alt="..."></img>
                    <div class="container">
                        <p class="fs-4 fw-bold text-capitalize">free delivery</p>
                        <p class="fs-6">lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <img src={`${process.env.PUBLIC_URL}/img/ICON_2.png`} class="img-fluid" alt="..."></img>
                    <div class="container">
                        <p class="fs-4 fw-bold text-capitalize">support 24/7</p>
                        <p class="fs-6">lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <img src={`${process.env.PUBLIC_URL}/img/ICON_3.png`} class="img-fluid" alt="..."></img>
                    <div class="container">
                        <p class="fs-4 fw-bold text-capitalize">100% authentic</p>
                        <p class="fs-6">lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Doi;
