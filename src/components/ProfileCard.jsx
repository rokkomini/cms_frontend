import React, { useEffect, useState } from 'react'

export default function ProfileCard({name, img, imgAlt, text}) {
    const [user, setUser] = useState('')

    const URI = process.env.REACT_APP_API_URI
    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      fetch(URI, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
    return (
        <div>
            
            {user && 
            <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-header">About me</div>
                <div className="card-body">
                <img src={user.logo.url} className="card-img-top" alt={imgAlt}></img>
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">heeej</p>
                </div>
            </div>
            }
        </div>

    )
}
