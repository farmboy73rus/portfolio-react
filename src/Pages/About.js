import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-wrapper">
                    <div className="about-info">
                        <div className="about-info__img"></div>
                        <div className="about-info__text">
                            <h3 className="about-info__heading text-uppercase">Alex Krasnov</h3>
                            <span class="badge rounded-pill bg-warning text-dark">Front-End Developer</span>
                            <ul className="about-info__list">
                                <li className="about-info__list-item">Born on 17.02.1987</li>
                                <li className="about-info__list-item">Live in Ulyanovsk, Russia</li>
                            </ul>
                            <p>I am a purposeful and highly motivated person who can quickly adapt to new conditions. Thanks to such qualities as communication skills, flexibility and reliability, I am good at working in a team. I am well organized, which can be successfully used to accomplish tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;