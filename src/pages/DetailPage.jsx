import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DetailCard, DetailsContainer } from '../components/styles/Details';
import parse from 'html-react-parser';
import Navbar from '../components/Navbar';
import { DefaultContainer } from '../components/styles/Containers';
import ProfileCard from '../components/ProfileCard';

export default function DetailPage() {

    const { slug } = useParams()

    const [post, setPost] = useState('');

    useEffect(() => {
        fetchData()
    }, [])

    const URI = process.env.REACT_APP_API_URI

    function fetchData() {
        fetch(`${URI}/posts/slug:$${slug}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setPost(data)
            });
    }

    return (
        <div>
            <Navbar />
            {console.log('post:', post, 'URL:', `${URI}/posts/${slug}`)}

            <DefaultContainer>
                <div>
                    <ProfileCard />
                </div>
                <DetailsContainer>
                    <DetailCard>
                        {post ? (
                            <div>
                                
                                {post && <img src={post.featured_image} alt="" />}
                                {post && <h1>{post.title}</h1>}
                                {post && <h4>{parse(post.content)}</h4>}
                                {post && <p class="text-primary">Posted by: {post.author.name}</p>}
                                {post.modified === post.date ? ( 
                                   <p class="text-secondary">Posted: {new Date(post.date).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p> 
                                   ):(
                                    <>
                                   <p class="text-secondary">Posted: {new Date(post.date).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p>
                                   <p class="text-secondary">Updated: {new Date(post.modified).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p>
                                   </>
                                   )}
                            </div>
                        ) : (<h2>Error</h2>)
                        }
                        <br />
                        <a href="/"><button type="button" className="btn btn-primary btn-lg d-flex">Back to home</button></a>
                    </DetailCard>

                </DetailsContainer>
            </DefaultContainer>
        </div>

    )
}