import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';

const HeaderSmall = (props) => (
  
      <HeaderWrapper>
        <Container>
          <Grid>
           <Text>
              <h1>
              {props.title || 'Titre'}
                
              </h1>
              <br />
              <p>
                
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 120px;
  padding-bottom: 30px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 120px;
  }
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;


export default HeaderSmall;
