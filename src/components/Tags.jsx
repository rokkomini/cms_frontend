import React from 'react'

export default function Tags({ tags }) {
    return (
        <div>
            {tags && tags.map(tag => {
                return (
                <button type="button" class="btn btn-outline-primary" >{tag}</button>
                )
            })}
        </div>
    )
}
