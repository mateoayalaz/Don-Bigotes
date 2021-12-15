import React from 'react';


function Footer() {

    return (

        <footer className="container-fluid bg-black">
            <div className="container d-flex justify-content-between">
                <div>
                    <p className="m-0">© Don Bigotes 2021 | Prohibida su reproduccion total o parcial.</p>
                </div>
                <div className="d-flex justify-content-start gap-4">
                    <a href="#"><i className="fab fa-facebook-square text-white fa-sm"></i></a>
                    <a href="#"><i className="fab fa-twitter text-white fa-sm"></i></a>
                    <a href="#"><i className="fab fa-instagram text-white fa-sm"></i></a>
                    <a href="#"><i className="fab fa-youtube text-white fa-sm"></i></a>
                </div>
            </div>
        </footer>

    );

}

export default Footer;