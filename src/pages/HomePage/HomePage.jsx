import React, {useState,useEffect} from 'react'
import data from '../../data.json'
import './HomePage.scss'
import WriteComments from '../../components/WriteComments/WriteComments'
import ReadComments from '../../components/ReadComments/ReadComments'


export default function HomePage() {

    const username = data.currentUser.username
    
    return (
        <>
        
           {data.comments.map((comments,index) => {
                   return  <ReadComments key={index} data={comments} isUserName={username}/>
           })}

            <WriteComments data={data} />
        </>
    )
}
