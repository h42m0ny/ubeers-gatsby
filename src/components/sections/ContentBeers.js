import React from 'react';

import { Section, Container } from '@components/global';

const ContentBeers = ({data}) => (
  
      <Section content>
        <Container>
        <h2>{data.name}</h2>
        
        <img src={data.image} alt={`${data.slug}`}/>
        <p>
        {data.description}
        </p>
          
        </Container>
      </Section>
);


export default ContentBeers;
