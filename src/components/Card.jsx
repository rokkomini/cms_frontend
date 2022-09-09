import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function Card({ title, img, imgAlt, excerpt, date, updated, key, slug }) {

    return (
         <div>
            <div className="card mb-3">

                <div className="card-body">
                    <h5 className="card-title ">{title}</h5>

                </div>
                <img src={img} className="card-img-top" alt={imgAlt}></img>
                <div className="card-body">
                    <p className="card-text">{excerpt}</p>
                </div>

                <div className="card-body">
                    
                    <Link key={key} to={`/posts/${slug}`}>Read more</Link>

                </div>
                {updated === date ? (
                    <div className="card-footer text-muted">

                        Posted: {new Date(date).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}
                    </div>
                ) : (
                    <div className="card-footer text-muted">
                        <p>Posted: {new Date(date).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p>
                        <p>Updated: {new Date(updated).toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' })}</p>

                    </div>
                )
                }
            </div>

        </div>


    )
}
