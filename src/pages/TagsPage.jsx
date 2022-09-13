import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { DefaultContainer, InfoDiv, PostsContainer } from '../components/styles/Containers';
import parse from 'html-react-parser'
import Card from '../components/Card';
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
            <h1 style={{textAlign:'center', padding:'15px'}}>Posts with tag: {tag.name}</h1>
            <DefaultContainer>
                
                <PostsContainer secondary>
                    {posts && posts.map(post => (
                        Object.keys(post.tags).filter(posterTag => posterTag === tag.name).map(sameTag => (
                            <Card key={post.id} title={parse(post.title)} img={post.featured_image} imgAlt={post.attachments[post.post_thumbnail.ID].alt} excerpt={parse(post.excerpt)} date={post.date} updated={post.modified} slug={post.slug} />
                        ))
                    ))}
                </PostsContainer>
            </DefaultContainer>
        </div >
    )
}
