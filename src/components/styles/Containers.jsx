import styled, { css } from "styled-components";

export const DefaultContainer = styled.div`
margin: 15px;
padding; 15px;
display: flex;
@media (max-width: 768px) {
    flex-direction: column;
    
  }
`

export const PostsContainer = styled.div`
width: 600px;
margin: ${props => props.secondary ? '0 auto' : '0 200px'} ;
@media (max-width: 768px) {
    width: 350px;
    margin: ${props => props.secondary ? '0 auto' : '0 auto'}
  }

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

export const DetailsContainer = styled.div`
width: 700px;
margin: 0 auto;
padding-top: 40px;

padding; 30px;

@media (max-width: 768px) {
    width: 300px;
    
  }

`

export const DetailCard = styled.div`
img {
    margin: 0 auto;
    width: 700px;
    @media (max-width: 768px) {
    
    max-width: 300px;
    }
}

.html5-video-player {
    @media (max-width: 768px) {
    
        max-width: 300px;
        }
}

`
