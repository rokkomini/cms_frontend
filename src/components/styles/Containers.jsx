import styled, { css } from "styled-components";

export const DefaultContainer = styled.div`
margin: 15px;
padding; 15px;
display: flex;

`

export const PostsContainer = styled.div`
width: 600px;
margin: 0 200px;
padding-right: 
`

export const InfoDiv = styled.div`
display: flex;
border-style: none none solid none ;
border-color: #d9230f;

justify-content: ${props => props.primary ? 'space-between' : 'center'};
align-items: ${props => props.primary ? 'flex-end' : 'baseline'};

div{
    button{
        padding: 5px;
    }
} 

`

/* ${props => props.primary && css`
justify-content: space-between;
align-items: flex-end;`}

${props => props.tagsDiv && css`
justify-content: flex-start;`} */
