import React from 'react'

export default function WriteComments({data,addComment}) {

    

    return (
        <div className="container-user">
            <img className="container-current-user" src={data.image.png} alt="user" />
            <textarea id="new-comment-input" placeholder="Add a comment..."></textarea>
            <button type="button" id="new-comment" onClick={()=>addComment()}>send</button>
        </div>
    )
}
