import React from 'react'

export default function Score({score}) {

    const [total, setTotal] = React.useState(score)
    const [plusLike, setPluslike] = React.useState(false)
    const [lessLike,setLessLike] = React.useState(false)

    const addLike = () =>{
        !plusLike &&
            setPluslike(true)
            setLessLike(false)
            setTotal(score + 1)
    }

    const removeLike = () =>{
        !lessLike &&
            setLessLike(true)
            setPluslike(false)
            setTotal(score - 1)
    }
    
    return (
            <div className="score">
                            <span className="score-plus" onClick={addLike}>+</span>
                            <span className="score-total">{total}</span>
                            <span className="score-minus" onClick={removeLike}>-</span>
            </div>
    )
}
