import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

const ArticleItem = (props) => {

    let localDate = new Date(props.post.published_at).toLocaleDateString();

    return (
        <HeaderItem>

        <LinkStyled to={`/articles/${props.post.slug}`}>
            <h2>{props.post.title}</h2>
        </LinkStyled>
        
        <p>Par {props.post.primary_author.name}, le {localDate}</p>
        <p>
            {props.post.excerpt}
        </p>
        <PLinkStyled to={`/articles/${props.post.slug}`}>
            <p>&nbsp;&#x2794; Lire l'article </p>
        </PLinkStyled>
       
        </HeaderItem>
    )
}

const HeaderItem = styled.div`
  padding-bottom: 40px;
`;

const LinkStyled = styled(Link)`
    text-decoration:none;

    margin: 0;
    font-weight: normal;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
`


const PLinkStyled = styled(Link)`
    text-decoration:none;

    margin: 0;
    font-weight: normal;
    margin-bottom: 1.45rem;
    color: inherit;
    
`


export default ArticleItem;