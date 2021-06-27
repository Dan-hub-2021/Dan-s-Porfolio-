import React from 'react';
import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';
import Content from '../components/Content';
// import Header from '../components/Header';
import Title from '../components/Title';

function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Title />   
            <Content />    
        </div>
    );

}

export default HomePage;