import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Carousel from '../components/Carousel';


function PortfolioPage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        <Carousel />

            <Content>
            <h3>Ethan's Art.com Page</h3>
            <p>In this project the class worked as a group to help undate a website that was live on the internet. Each student had the respinsibility to update between 3-4 page for the Client.Click here for the code in GitHub link <a href="https://github.com/wu-bootcamp/web302502_project1" target="_blank" rel="noopener noreferrer">here</a> to get to the project.</p>

            <h3>Finanical Help</h3>
            <p>This was solo project in which we had to build a site using our knowledge of JaveScript ES6, Espress, MongoDB, Mongoose, SASS made sure the site was secured with SSL. Implement a signup, login, logout with Authenitcation and Authorization.Click here for the code in GitHub link <a href="https://github.com/Dan-hub-2021/Financial-Help" target="_blank" rel="noopener noreferrer">here</a> to get to the project.</p>

            <h3>Current Time</h3>
            <p>In this project we learned app that would greate you and give you the current time. When you open the app and type in your name and hit the enter buttom you will be taken to a new page with a greeting and the current time. Click here for the code in GitHub link <a href="https://github.com/Dan-hub-2021/pwa-demo" target="_blank" rel="noopener noreferrer">here</a> to get to the project.</p>

            <h3>PacMan</h3>
            <p>In this project we were task to create a program that had Pacman zoom across the screen. Once you open the app you can start adding as much PacMan's as you want and when you press the start game you can see that tha PacMans will start to speen up. Click here for the code in GitHub link <a href="https://github.com/Dan-hub-2021/pacman-assignment" target="_blank" rel="noopener noreferrer">here</a> to get to the project.</p>

            <h3>Flashcards</h3>
            <p>In this project I create a flashcard game which you tests your knowledge from a mix of topics which you select from the drop menu. Lanuage used in this project were React JS, firebase, React, Node JS, CSS, SWA, booystrap and SSL. Click here for the code in GitHub link <a href="https://github.com/Dan-hub-2021/Flashcard-Game" target="_blank" rel="noopener noreferrer">here</a> to get to the project.</p>
            </Content>
        </div>        
    );   
}

export default PortfolioPage;