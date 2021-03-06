import React from 'react'
import Modal from '../Modal/Modal';
import Score from '../Score/Score';

export default function ReadComments({data,isUserName}) {

    // const deleteComments = (event) =>{
    //     event.preventDefault();
    //     // document.querySelectorAll(".delete").forEach(del =>{
    //     //     const comments = data.comments
    //     //     del.addEventListener("click", () => {
    //     //          const index = del.getAttribute('data-value')
    //     //          console.log(index)
    //     //          console.log(comments)
    //     //          comments.splice(index, 1)
    //     //          displayComments(comments)
    //     //     })
    //     // })
    // }
    // const username = data.currentUser.username
    // console.log(username)
    // console.log(data)
    
    const [modalOpen, setModalOpen] = React.useState(false)

    const toggleModal = () =>{
        setModalOpen(!modalOpen);
    }

    const deleteComment = ()=>{
        console.log('delete')
        toggleModal()
    }

    return (
        
        <div>
            <div  className="container">
                    <div className="wrapper">
                        <Score score={data.score}/>
                        <div className="container-header">
                            <img src={data.user.image.png} alt="user" />
                           <div className="container-header-user">{data.user.username}</div>
                           {isUserName === data.user.username &&  <span id="you">you</span> }
                            <div className="container-header-date">{data.createdAt}</div>
                        </div>
                        <p>{data.content}</p>
                        <div className="container-icons">
                        {isUserName === data.user.username && 
                        <span className="delete" onClick={toggleModal} data-value={data.id}>
                                <img className="delete-icon" src="/images/icon-delete.svg" alt="delete-icon"></img>
                            Delete
                            </span> 
                            }
                            <span className="reply" data-value={data.id}>
                                <img className="reply-icon" src="/images/icon-reply.svg" alt="reply-icon"></img>
                            Reply</span>
                        </div>
                    </div>

                    <div className="border">
                        {data.replies.map((comments,index)=>{
                            return  <div key={index} className="container-reply">
                                        <Score score={comments.score}/>
                                        <div className="container-header">
                                            <img src={comments.user.image.png} alt="user" />
                                            
                                            <div className="container-header-user">{comments.user.username}</div>
                                            {isUserName === comments.user.username &&  <span id="you">you</span> }
                                            <div className="container-header-date">{comments.createdAt}</div>
                                        </div>
                                        <p>{comments.content}</p>
                                        <div className="container-icons">
                                        {isUserName === comments.user.username &&   <span className="delete" onClick={toggleModal} data-value={comments.id} >
                                                <img className="delete-icon" src="/images/icon-delete.svg" alt="delete-icon"></img>
                                            Delete</span> }
                                        {isUserName !== comments.user.username ? <span className="reply" data-value={comments.id}>
                                                <img className="reply-icon" src="/images/icon-reply.svg" alt="reply-icon"></img>
                                            Reply</span>  
                                            :  <span className="reply" data-value={comments.id}>
                                                <img className="edit-icon" src="/images/icon-edit.svg" alt="edit-icon"></img>
                                            Edit</span>}
                                        </div>
                                    </div>
                        })}
                    </div>
                    
                </div>
                 <Modal modalOpen={modalOpen} modalClose={toggleModal} deleteComment={deleteComment}/>  
        </div>
    )
}
