import React from 'react';
import {Props} from "./types";
import Container from "client/components/Container";
import Heading from "client/components/@typography/Heading";
import AvailableList from "client/components/ArticleList";

import shipImage1 from './images/ship-1.jpg';
import shipImage2 from './images/ship-2.jpg';
import shipImage3 from './images/ship-3.jpg';
import Spacing from "client/components/Spacing";


let AvailableSection: Props = () => {
    return (
        <div>
            <Container>
                <Heading level={'h2'} addLine={true} uppercase>
                    Available starships
                </Heading>
                <Spacing size={'md'} sizeMd={'xl'} />
                <AvailableList>{[
                    {
                        name: 'LK1 «Desert Eagle»',
                        title: 'Best aircraft too begin with',
                        description: 'To the enemy, it is a weapon never to be underestimated. To allies, it\'s a savior. The F7C Hornet is the same dependable and resilient multi-purpose fighter.',
                        imageSource: shipImage1,
                        comingSoon: true
                    },
                    {
                        name: 'MAR-10',
                        title: 'Medium fighter',
                        description: 'the MAR-10 is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament.',
                        imageSource: shipImage2
                    },
                    {
                        name: 'M135 Vorona',
                        title: 'Heavy fighter',
                        description: 'Boasting a heavy cannon and a Lightning Power engine.',
                        imageSource: shipImage3,
                        comingSoon: true
                    },
                ]}</AvailableList>
            </Container>
        </div>
    );
};

export default AvailableSection;