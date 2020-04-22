import React from 'react';

import { Section, Container } from '@components/global';

const ContentBrewerie = ({data}) => (
      
      <Section content>
        <Container>
         <img src={data.feature_image} alt={data.slug}/>
        <p>
            {data.plaintext}
        </p>
                 
        </Container>
      </Section>
);


export default ContentBrewerie;