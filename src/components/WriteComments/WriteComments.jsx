import React from 'react'

export default function WriteComments({data}) {

    const addComment = (event) =>{

        const commentValue = document.querySelector('#new-comment-input').value;
        event.preventDefault();
        data.comments.push({
            id: 3,
            content: commentValue,
            createdAt: "Today",
            replies: [],
            score: 0,
            user: {
                image: { png: data.currentUser.image.png},
                username:data.currentUser.username
            }
        })
        console.log(data.comments)
    }

    return (
        <div className="container-user">
            <img className="container-current-user" src={data.currentUser.image.png} alt="user" />
            <textarea id="new-comment-input" placeholder="Add a comment..."></textarea>
            <button type="button" id="new-comment" onClick={addComment}>send</button>
        </div>
    )
}
