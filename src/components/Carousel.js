import React from 'react';
import Card from '../components/Card';
import ethan from '../assets/images/ethan.jpg';
import wallstreets_bets from '../assets/images/wallstreets_bets.jpg';
import flashcard from '../assets/images/flashcard.PNG';
import current from '../assets/images/current.JPG';
import pacman from '../assets/images/pacman.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Evan\'s Page',
                    subTitle: 'First live website',
                    imgSrc: ethan,
                    link: 'https://github.com/wu-bootcamp/web302502_project1',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Financial Help',
                    subTitle: 'wallstreets_bets',
                    imgSrc: wallstreets_bets,
                    link: ' https://dan-hub-2021.github.io/Financial-Help/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Current Time',
                    subTitle: 'get your current time',
                    imgSrc: current,
                    link: 'https://current-time2021.netlify.app',
                    selected: false
                },
                {
                    id: 3,
                    title: 'PacMan',
                    subTitle: 'PacMan after drinking a couple cups of coffee',
                    imgSrc: pacman,
                    link: 'https://pacmanspeedster.netlify.app',
                    link2: 'https://github.com/Dan-hub-2021/pacman-assignment',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Flashcards',
                    subTitle: 'Test your knowledge',
                    imgSrc: flashcard,
                    link: 'https://flashcardgame2021.netlify.app',
                    selected: false
                },
            ]
        }
    }

    



    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;