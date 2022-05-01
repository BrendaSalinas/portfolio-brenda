import React from 'react';
import './main.css';
import webdev from '../../img/webdev.jpeg'

const Main = () => {
    return (
        <div className = 'main'>
            <div className="main-left">
                <div className='main-left-wrap'>
                    <h3 className='introduction'> Hello, My name is</h3>
                    <h2 className='name'>Brenda Salinas</h2>
                    <div className='title'>
                        <div className='title-wrap'>
                            <div className='title-1'>Full Stack Web Developer</div>
                        </div>
                    </div>
                    <div className='description'>
                    I am a professional web developer, I graduated from Texas A&M University as an environmental engineer, during my time as an engineering student i had the opportunity to work with different programming languages, I discover later in my career that web development is the future, I recently graduated from a full stack web developer bootcamp in UT Austin.
                    </div>
                </div>
            </div>
            <div className="main-right">
                <img src ={webdev} alt ='' className='img'/>
            </div>
            
        </div>
    )
}

export default Main