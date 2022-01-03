import React, {useState,useEffect} from 'react'
import dataJson from '../../data.json'
import './HomePage.scss'
import WriteComments from '../../components/WriteComments/WriteComments'
import ReadComments from '../../components/ReadComments/ReadComments'


export default function HomePage() {

    const [data, setData] = React.useState(dataJson);
    
    React.useEffect(() => {
        const data = localStorage.getItem(dataJson);
        if (data) {
            setData(JSON.parse(data));
        }
      }, []);
    
    
    
 
    
    return (
        <>
            <ReadComments data={data}/>   
            <WriteComments data={data} />
        </>
    )
}
