import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-wrapper">
                    <h3>Work</h3>
                    <div className="row">
                        <div className="col">
                            <div className="card text-white work-block__item mb-3">
                                <div className="card-header">2012 - 2021</div>
                                <div className="card-body">
                                    <h5 className="card-title">City polyclinic №6 of Ulyanovsk</h5>
                                    <p className="card-text">Head of Automated Control Systems Department</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white work-block__item mb-3">
                                <div className="card-header">2014 - 2020</div>
                                <div className="card-body">
                                    <h5 className="card-title">Panacea Medical Clinic</h5>
                                    <p className="card-text">Programmer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white work-block__item mb-3">
                                <div className="card-header">2021 - Today</div>
                                <div className="card-body">
                                    <h5 className="card-title">Cart-Power</h5>
                                    <p className="card-text">Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;