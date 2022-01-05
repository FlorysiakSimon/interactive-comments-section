import React from 'react'
import './Modal.scss'

export default function Modal({modalOpen,modalClose,deleteComment}) {
    
    if(!modalOpen){return null;}

    return (
        <>
            <div className="modal">
                <div onClick={modalClose} className="modalOverlay">   
                </div>
                <div className="modalContent" >
                    <h2>Delete comment</h2>
                    <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
                    <div className="modalContentButtons">
                        <button onClick={modalClose} className="modalContentButtonsClose">
                            No, cancel
                        </button>
                        <button className="modalContentButtonsDelete" onClick={deleteComment}>Yes, Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
