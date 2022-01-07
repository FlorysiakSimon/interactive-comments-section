import React,{useEffect} from 'react'
import './HomePage.scss'
import WriteComments from '../../components/WriteComments/WriteComments'
import ReadComments from '../../components/ReadComments/ReadComments'
import Modal from '../../components/Modal/Modal'

export default function HomePage({data}) {
    
    const [comments,setComments] = React.useState(data.comments)
    const [user,setUser] = React.useState(data.currentUser)
    const [modalOpen, setModalOpen] = React.useState(false)

    const toggleModal = () =>{
        setModalOpen(!modalOpen);
    }

    const deleteComment = ()=>{
        console.log('delete')
        toggleModal()
    }

    useEffect(() => {
        // fetch('../../data.json')
        // .then(response => response.json())
        
        // .then(json => setComments(json))
        console.log('new-comment' + comments)
    }, [comments])

    const addComment = () =>{

        const newComment = {
            id: 3,
            content: document.querySelector('#new-comment-input').value,
            createdAt: "Today",
            replies: [],
            score: 0,
            user: {
                image: { png: user.image.png},
                username:user.username
            }
        }
        
        setComments([...comments, newComment])
    }
    
    const username = data.currentUser.username
    return (
        <>
        <Modal modalOpen={modalOpen} modalClose={toggleModal} deleteComment={deleteComment}/>
        
        <section>
          <div className="commentList">
            {comments.map((comments,index) => {
                return  <ReadComments key={index} data={comments} isUserName={username} toggleModal={toggleModal} deleteComment={deleteComment}/>
            })}
          </div>
          <WriteComments data={user} addComment={addComment}/>
        </section>
        </>
    )
}
