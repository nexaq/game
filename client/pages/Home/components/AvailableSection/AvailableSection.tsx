import React from 'react';
import {Props} from "./types";
import Container from "client/components/Container";
import Heading from "client/components/typography/Heading";
import AvailableList from "../../../../components/ArticleList";

import shipImage1 from './images/ship-1.jpg';
import shipImage2 from './images/ship-2.jpg';
import shipImage3 from './images/ship-3.jpg';


let AvailableSection: Props = () => {
    return (
        <div>
            <Container>
                <Heading level={'h2'} addLine={true}>
                    available <br/>
                    starships
                </Heading>
                <AvailableList>{[
                    {
                        name: 'LK1',
                        title: 'Best aircraft too begin with',
                        description: 'As your partner we do a lot, but what\'s more important is how we help you move forward – agnostic of your industry or our output.',
                        imageSource: shipImage1
                    },
                    {
                        name: 'LK3',
                        title: 'Best aircraft too begin with',
                        description: 'As your partner we do a lot, but what\'s more important is how we help you move forward – agnostic of your industry or our output.',
                        imageSource: shipImage2
                    },
                    {
                        name: 'LK12',
                        title: 'Best aircraft too begin with',
                        description: 'As your partner we do a lot, but what\'s more important is how we help you move forward – agnostic of your industry or our output.',
                        imageSource: shipImage3
                    },
                ]}</AvailableList>
            </Container>
        </div>
    );
};

export default AvailableSection;