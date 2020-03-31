import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }



  div.feature-image {
    text-align:center;
    margin-bottom:20px;    
  }
  

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const FeatureImage = styled.img`
  width: 80%;

  @media (min-width: ${props => props.theme.screen.md}) {
  width: auto;
  }
`


export const Section = styled.section`
  padding: 38px 0;
  overflow: hidden;



 

  ${props => 
    props.content &&
      `
      padding:50px 0;
      `
    }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;
