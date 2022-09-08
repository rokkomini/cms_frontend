import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import Card from "../components/Card";
import { DefaultContainer, PostsContainer } from "../components/styles/Containers";
import Navbar from "../components/Navbar";
import parse from 'html-react-parser'
import ProfileCard from "../components/ProfileCard";


export default function StartPage() {
  const [posts, setPosts] = useState();
  const params = useParams()


  const URI = process.env.REACT_APP_API_URI
  useEffect(() => {
    fetchPosts()
  }, []);

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
      <div>
        <DefaultContainer>

          <div>
            <ProfileCard />
          </div>
          <PostsContainer>
            {posts && posts.map(post => {
              let imgID = post.post_thumbnail.ID
              return (
                <Card key={post.id} title={post.title} img={post.featured_image} imgAlt={post.attachments[imgID].alt} excerpt={parse(post.excerpt)} date={post.date} updated={post.modified} slug={post.slug} />
              )
            })}
            <Card header='This is header' title='title' excerpt='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorum sapiente delectus repellendus repellat ab cupiditate minima perspiciatis fugiat, illo ipsum eaque laboriosam adipisci non aliquid! Libero molestiae sapiente a!' />
          </PostsContainer>

        </DefaultContainer>
      </div>
    </div>
  );
}
