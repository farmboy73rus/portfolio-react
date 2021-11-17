import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-wrapper">
                    <h3>Skills</h3>
                    <div className="skills-block">
                        <div className="skills-block__item">
                            <h4 className="badge rounded-pill bg-warning text-dark">HTML 5</h4>
                        </div>
                        <div className="skills-block__item">
                            <h4 className="badge rounded-pill bg-warning text-dark">CSS 3</h4>
                        </div>
                        <div className="skills-block__item">
                            <h4 className="badge rounded-pill bg-warning text-dark">JavaScript</h4>
                        </div>
                        <div className="skills-block__item">
                            <h4 className="badge rounded-pill bg-warning text-dark">ReactJS</h4>
                        </div>
                        <div className="skills-block__item">
                            <h4 className="badge rounded-pill bg-warning text-dark">Smarty</h4>
                        </div>
                        <div className="skills-block__item">
                            <h4 className="badge rounded-pill bg-warning text-dark">Git</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;