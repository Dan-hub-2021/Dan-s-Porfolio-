import React from 'react';
import Card from './Card';
import me from '../assets/images/me.jpg';
import projects from '../assets/images/projects.jpg';
import contacts from '../assets/images/contacts.jpg';
import resume from '../assets/images/resume.PNG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'About',
                    subTitle: 'Dan Sy',
                    imgSrc: me,
                    link:'/about',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Projects',
                    subTitle: 'Porjects completed',
                    imgSrc: projects,
                    link: '/portfolio',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Resume',
                    subTitle: 'The Right Fit',
                    imgSrc: resume,
                    link:'/resume',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Contact',
                    subTitle: 'How to get a hold of me',
                    imgSrc: contacts,
                    link: '/contact',
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

export default Title;