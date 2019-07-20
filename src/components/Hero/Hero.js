import React from 'react';
import HeroButton from '../HeroButton';
import bgimage from './background.jpg';
import logo from './logo.png';

const Hero = () => {
    return (
        <div id="hero" className="Hero" style={{ backgroundImage: `url(${bgimage})` }}>
            <div className="content">
                <img className="logo" src={logo} alt="dark phoenix logo" />
                <h2>Now available online</h2>
                <p>Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all of humanity.</p>
                <div className="button-wrapper">
                    <HeroButton primary={true} text="Watch now" />
                    <HeroButton primary={false} text="+ My list" />
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    );
}

export default Hero;