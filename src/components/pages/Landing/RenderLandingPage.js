import React from 'react';
import { Typography } from 'antd';
import navLogo from '../../../images/navLogo.jpg';
import ghibli2 from '../../../images/ghibli2.jpg';

const { Title, Paragraph } = Typography;

function RenderLandingPage(props) {
    return (
        <div className='landing-container'>
            <div className='landpage-background'>
                <img className='landing-primaryImg' src={ghibli2} alt="background img" />
            </div>
            <div className='landing-text'>
                <Title className="landing-main-text landing-main-title">
                    Hello world!
                </Title>
                <Paragraph className="landing-main-text">
                    We love art and we hope you do as well! <br />
                    Our passion is to create beautiful art in the form of photography.
                </Paragraph>
            </div>
            <div className='landpage-background'>
                <img className='landing-img' src={navLogo} alt="background img" />
            </div>
            <div className='landpage-background'>
                <img className='landing-img' src={navLogo} alt="background img" />
            </div>
            <div className='landpage-background'>
                <img className='landing-img' src={navLogo} alt="background img" />
            </div>
        </div>
    );
}

export default RenderLandingPage;