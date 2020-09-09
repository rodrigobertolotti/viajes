import React from 'react';
import CountDown from './CountDown';
import CardsCarousel from './Carousel';

class Trip extends React.Component {
    render() {
        return (
            <>
                <CountDown></CountDown>
                <CardsCarousel></CardsCarousel>
            </>
        )
    }
}

export default Trip;