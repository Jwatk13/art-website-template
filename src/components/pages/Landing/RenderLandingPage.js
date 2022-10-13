import React from 'react';
import flowerPlateau from '../../../images/flowerPlateau.jpg';
import howlsCastle1 from '../../../images/howlsCastle1.jpg';
import howlsCastle2 from '../../../images/howlsCastle2.jpg';
import howlsCastle3 from '../../../images/howlsCastle3.jpg';

function RenderLandingPage() {
    return (
        <div className='landing-container'>
            <div className='landpage-background'>
                <img className='landing-primaryImg' src={flowerPlateau} alt="background img" />
            </div>
            <div className='landing-text'>
                <h1 className="landing-main-title">
                    Hello world!
                </h1>
                <p className="landing-main-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='landpage-images1'>
                <img className='landing-img' src={howlsCastle1} alt="background img" />
            </div>
            <div className='landpage-images2'>
                <img className='landing-img' src={howlsCastle2} alt="background img" />
            </div>
            <div className='landpage-images3'>
                <img className='landing-img' src={howlsCastle3} alt="background img" />
            </div>
        </div>
    );
}

export default RenderLandingPage;