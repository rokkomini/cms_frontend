import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Navbar from '../components/Navbar';
import { DefaultContainer, InfoDiv, DetailCard, DetailsContainer } from '../components/styles/Containers';
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
            <DefaultContainer>
                <div>
                    <ProfileCard />
                </div>
                <DetailsContainer>
                    <DetailCard>
                        {post &&
                            <div>

                                <img src={post.featured_image} alt={post.attachments[post.post_thumbnail.ID].alt} />
                                <h1>{parse(post.title)}</h1>
                                <h4>{parse(post.content)}</h4>
                                <InfoDiv primary>
                                    <div>
                                        <p class="text-primary">Posted by: {post.author.name}</p>
                                    </div>
                                    <div>
                                        {post.modified === post.date ? (
                                            <p class="text-secondary">Posted: {new Date(post.date).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p>
                                        ) : (
                                            <>
                                                <p class="text-secondary">Posted: {new Date(post.date).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p>
                                                <p class="text-secondary">Updated: {new Date(post.modified).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p>
                                            </>
                                        )}
                                    </div>
                                </InfoDiv>
                                <InfoDiv>
                                    <div>
                                        <p class="text-muted">Taggar: </p>
                                    </div>
                                    <div>
                                        {Object.keys(post.tags).map((tag, index) => {
                                            return (
                                                /* console.log('tag button link', post.tags[tag].slug ) */
                                                <a href={`/tags/${post.tags[tag].slug}`}><button key={index} type="button" class="btn btn-outline-primary" style={{ margin: '10px' }}>{tag}</button></a>
                                            )
                                        })}
                                    </div>
                                </InfoDiv>
                            </div>
                        }
                        <br />
                        <a href="/"><button type="button" className="btn btn-primary btn-lg d-flex">Back to home</button></a>
                    </DetailCard>

                </DetailsContainer>
            </DefaultContainer>
        </div>

    )
}
