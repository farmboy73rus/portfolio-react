import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-wrapper">
                    <h3>Education</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card text-white edu-block__item mb-3">
                                <div className="card-header">2005 - 2008</div>
                                <div className="card-body">
                                    <h5 className="card-title">Ulyanovsk Aviation College</h5>
                                    <p className="card-text">Specialty - Applied Informatics in the Aviation Industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card text-white edu-block__item mb-3">
                                <div className="card-header">2008 - 2011</div>
                                <div className="card-body">
                                    <h5 className="card-title">Ulyanovsk State University</h5>
                                    <p className="card-text">Specialty - Applied Informatics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;