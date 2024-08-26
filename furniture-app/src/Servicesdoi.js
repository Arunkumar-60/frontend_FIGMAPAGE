import React from "react";

function services(){
    return (
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
    )
}

export default services;