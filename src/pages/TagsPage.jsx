import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { DefaultContainer, InfoDiv } from '../components/styles/Containers';

export default function TagsPage() {

    const { slug } = useParams()

    const [tag, setTag] = useState('');
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetchTag()
        fetchPosts()
    }, [])

    const URI = process.env.REACT_APP_API_URI

    function fetchTag() {
        fetch(`${URI}/tags/slug:$${slug}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setTag(data)
            });
    }

    async function fetchPosts() {
        fetch(`${URI}/posts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.posts);
            });
    }

    return (
        <div>
            <Navbar />
            {console.log('tag:', tag)}
            <DefaultContainer>
                <h2>Tag: {tag.name}</h2>
                <br />
                <InfoDiv>
                    <h3>Fler inlägg med taggen {tag.name}</h3>
                    <ul>
                       {/*  {Object.keys(post.tags).map((tag, index) => {
                            return (
                                /* console.log('tag button link', post.tags[tag].slug ) 
                                <li><a href={`/posts/${post.slug}`}><button key={index} type="button" class="btn btn-outline-primary" style={{ margin: '10px' }}>{tag}</button></a></li>
                            )
                        })} */}
                    </ul>

                </InfoDiv>
            </DefaultContainer>
        </div>
    )
}
