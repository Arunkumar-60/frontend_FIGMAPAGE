import React from 'react';

function Section_2() {
    return (

        <div class="container-fluid d-flex justify-content-around flex-column p-2">
            <div  >

                <p class="fs-2 fw-bold text-center">Inspiration Collection</p>
                <p class="fs-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container-fluid d-flex justify-content-around g-1 p-3">
                <div className="card border-0" style={{ width: '18rem' }} id="cardid-1">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/card-1.png`} class="img-fluid " id="custom-border-radius-1" alt="..."></img></div>
                </div>

                <div className="card border-0" style={{ width: '18rem' }} id="cardid-2">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/card-2.png`} class="img-fluid" alt="..."></img></div>
                </div>

                <div className="card border-0" style={{ width: '18rem' }} id="cardid-3">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/card-3.png`} class="img-fluid" id='custom-border-radius-3' alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section_2;
