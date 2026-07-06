import React from "react";

function ContactModal() {
    return (
        <div
            className="modal fade"
            id="contactModal"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">

                <div className="modal-content contact-modal">

                    <div className="modal-header border-0">

                        <div>
                            <span className="section-tag">Let's Connect</span>

                            <h2 className="mt-3 mb-0">
                                Start Your Entrepreneurial Journey
                            </h2>
                        </div>

                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>

                    </div>

                    <div className="modal-body">

                        <div className="row">

                            <div className="col-lg-6">

                                <input
                                    type="text"
                                    className="form-control contact-input"
                                    placeholder="Full Name"
                                />

                            </div>

                            <div className="col-lg-6">

                                <input
                                    type="email"
                                    className="form-control contact-input"
                                    placeholder="Email Address"
                                />

                            </div>

                            <div className="col-lg-6 mt-4">

                                <input
                                    type="tel"
                                    className="form-control contact-input"
                                    placeholder="Phone Number"
                                />

                            </div>

                            <div className="col-lg-6 mt-4">

                                <input
                                    type="text"
                                    className="form-control contact-input"
                                    placeholder="City"
                                />

                            </div>

                            <div className="col-12 mt-4">

                                <textarea
                                    rows="5"
                                    className="form-control contact-input"
                                    placeholder="Tell us about your goals..."
                                ></textarea>

                            </div>

                            <div className="col-12 mt-4 text-center">

                                <button className="btn-submit">
                                    Send Enquiry
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default ContactModal;