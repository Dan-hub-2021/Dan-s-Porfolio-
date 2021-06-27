import React from 'react';
import Hero from '../components/Hero';
import Resume from '../components/Content';


function ResumePage(props) {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Resume />
        </div>
    );
}

export default ResumePage;
