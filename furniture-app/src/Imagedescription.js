import React from 'react';

function Image_description() {
    return (
        <div class="container-fluid d-flex flex-row mx-auto" id='arun-back-321' >

            <div class="card-Imagedescription mt-5 mx-auto justify-content-center d-flex flex-column g-1 ">
                <h2>Beautify Your Space</h2>
                <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <a href="#" class="btn btn-Imagedescription">Learn More</a>
            </div>
            <div class="col-lg-6 container">
                <img class="w-50 shadow image-div-overlay" src={`${process.env.PUBLIC_URL}/img/desc-image/image-des.png`} />

            </div>
        </div >

    )
}

export default Image_description;