import React from 'react';

function Container() {
    return (
        <div class="container-fluid d-flex justify-content-around flex-column p-2">
            <div  >

                <p class="fs-2 fw-bold text-center">Browse The Range</p>
                <p class="fs-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container-fluid d-flex justify-content-around g-1 p-3">
                <div className="card border-0" style={{ width: '18rem' }} id="cardid-1">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/card-1.png`} class="img-fluid " alt="..."></img></div>


                    <p class="card-text  fs-3 text-center">Dining</p>


                </div>

                <div className="card border-0" style={{ width: '18rem' }} id="cardid-2">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/card-2.png`} class="img-fluid" alt="..."></img></div>
                    <p class="card-text  fs-3 text-center">Living</p>
                </div>

                <div className="card border-0" style={{ width: '18rem' }} id="cardid-3">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/card-3.png`} class="img-fluid" alt="..."></img>
                        <p class="card-text  fs-3 text-center">Bedroom</p>
                    </div>
                </div>
            </div>
            <div  >
                <hr></hr>

                <p class="fs-2 fw-bold text-center">How It Works</p>
                <p class="fs-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container-fluid d-flex justify-content-around g-1 p-3">
                <div className="card border-0" style={{ width: '18rem' }} id="cardid-1">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/type-1.png`} class="img-fluid " alt="..."></img></div>


                    <p class="card-text fw-bold fs-4 text-center">Purchase Securely</p>
                    <p class="card-text text-center">lorem asnj lre sir aeh wkjna wje ajweh eb f ea aeb ea awbyd whav e </p>



                </div>

                <div className="card border-0" style={{ width: '18rem' }} id="cardid-2">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/type-2.png`} class="img-fluid" alt="..."></img></div>
                    <p class="card-text fw-bold fs-4 text-center">Ship From Warehouse</p>
                    <p class="card-text text-center">lorem asnj lre sir aeh wkjna wje ajweh eb f ea aeb ea awbyd whav e </p>
                </div>

                <div className="card border-0" style={{ width: '18rem' }} id="cardid-3">
                    <div className="card-body p-0">
                        <img src={`${process.env.PUBLIC_URL}/img/card/type-3.png`} class="img-fluid" alt="..."></img>
                        <p class="card-text fw-bold fs-4 text-center">Style Your Room</p>
                        <p class="card-text text-center">lorem asnj lre sir aeh wkjna wje ajweh eb f ea aeb ea awbyd whav e </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Container;
