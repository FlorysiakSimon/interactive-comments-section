import React from 'react'

export default function ReadComments({data}) {

    const deleteComments = (event) =>{
        event.preventDefault();
        // document.querySelectorAll(".delete").forEach(del =>{
        //     const comments = data.comments
        //     del.addEventListener("click", () => {
        //          const index = del.getAttribute('data-value')
        //          console.log(index)
        //          console.log(comments)
        //          comments.splice(index, 1)
        //          displayComments(comments)
        //     })
        // })
    }
    const username = data.currentUser.username
    console.log(username)
    console.log(data)
    return (
        
        <div>
             {data.comments.map((comments,index) => {
                    if(comments.user.username === username){return null}
                   return  <div key={index} className="container">
                                <div className="wrapper">
                                    <div className="score">
                                        <span className="score-plus">+</span>
                                        <span className="score-total" data-value={comments.score}>{comments.score}</span>
                                        <span className="score-minus">-</span>
                                    </div>
                                    <div className="container-header">
                                        <img src={comments.user.image.png} alt="user" />
                                        <div className="container-header-user">{comments.user.username}</div>
                                        <span id="you">you</span>
                                        <div className="container-header-date">{comments.createdAt}</div>
                                    </div>
                                    <p>{comments.content}</p>
                                    <div className="container-icons">
                                        <span className="delete" data-value={comments.id}>
                                            <img className="delete-icon" src="/images/icon-delete.svg" alt="delete-icon"></img>
                                        Delete
                                        </span>
                                        <span className="reply" data-value={comments.id}>
                                            <img className="reply-icon" src="/images/icon-reply.svg" alt="reply-icon"></img>
                                        Reply</span>
                                    </div>
                                </div>
                                {comments.replies.map((comments,index)=>{
                                    return  <div key={index} className="container-reply">
                                                <div className="score">
                                                    <span className="score-plus">+</span>
                                                    <span className="score-total">{comments.score}</span>
                                                    <span className="score-minus">-</span>
                                                </div>
                                                <div className="container-header">
                                                    <img src={comments.user.image.png} alt="user" />
                                                    
                                                    <div className="container-header-user">{comments.user.username}</div>
                                                    <span id="you">you</span>
                                                    <div className="container-header-date">{comments.createdAt}</div>
                                                </div>
                                                <p>{comments.content}</p>
                                                <div className="container-icons">
                                                    <span className="delete" data-value={comments.id} >
                                                        <img className="delete-icon" src="/images/icon-delete.svg" alt="delete-icon"></img>
                                                    Delete</span>
                                                    <span className="reply" data-value={comments.id}>
                                                        <img className="reply-icon" src="/images/icon-reply.svg" alt="delete-icon"></img>
                                                    Reply</span>
                                                </div>
                                            </div>
                                })}
                            </div>
        })}
        </div>
    )
}
