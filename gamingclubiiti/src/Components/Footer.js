import React from 'react'

function Footer() {
    return (
        <div className="footer w-full border-slate-500 border-t-2">
            <footer className="text-center text-white">
                <div className="container">
                    <section>
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6>
                                    <a href="#!" className="text-uppercase font-weight-bold text-red-50 hover:text-red-500 transition ease-in-out duration-500">About us</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                            <h6>
                                    <a href="#!" className="text-uppercase font-weight-bold text-red-50 hover:text-red-500 transition ease-in-out duration-500">Merch</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                            <h6>
                                    <a href="#!" className="text-uppercase font-weight-bold text-red-50 hover:text-red-500 transition ease-in-out duration-500">Tournaments</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                            <h6>
                                    <a href="#!" className="text-uppercase font-weight-bold text-red-50 hover:text-red-500 transition ease-in-out duration-500">News</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                            <h6>
                                    <a href="#!" className="text-uppercase font-weight-bold text-red-50 hover:text-red-500 transition ease-in-out duration-500">Contact</a>
                                </h6>
                            </div>
                        </div>
                    </section>

                    <hr className="my-5" />

                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-5">
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div
                    className="text-center p-3 border-t-2 border-slate-500">
                    © 2022 Copyright.
                    <a className="text-white" />
                </div>
            </footer>
        </div>
    )
}

export default Footer