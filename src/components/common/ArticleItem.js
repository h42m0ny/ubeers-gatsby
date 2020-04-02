import React from 'react';
import styled from 'styled-components';


const ArticleItem = (props) => {

    let localDate = new Date(props.post.published_at).toLocaleDateString();

    return (
        <HeaderItem>

        <h2>{props.post.title}</h2>
        <p>Par {props.post.primary_author.name}, le {localDate}</p>
        <p>
            {props.post.excerpt}
        </p>
        <p>&nbsp;&#x2794; Lire l'article </p>
        </HeaderItem>
    )
}

const HeaderItem = styled.div`
  padding-bottom: 40px;
`;


export default ArticleItem;