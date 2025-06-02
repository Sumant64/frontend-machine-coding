import React, { useEffect, useState } from 'react'

/**
In the page we can see that the page will render infinite times,
as the useState variable renderCount will increment async way, which 
will again and again make the page to render with useEffect.

o For this problem we can use useRef, it will not make the page to render.

 */

const ProblemWithoutRef = () => {
    const [name, setName] = useState("");
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(prev => prev + 1);
    })

    // useEffect(() => {
    //     setRenderCount(prev => prev + 1);
    // }, [renderCount])

  return (
    <>
        <input 
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <div>My name is {name}</div>
        <div>I rendered {renderCount} times</div>
    </>
  )
}

export default ProblemWithoutRef