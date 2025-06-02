import React, { useState } from 'react'
import List from './List';

/**
 * In the normal method, 
 * we can see that the getItems function is called within list component useEffect
 *     useEffect(() => {
         setItems(getItems());
         console.log('uploading items');
     }, [getItems])

     o If we will click on the toggle button also then also the useEffect is called.
     o But we need to make the function call only on change of getItems function which can be 
     done with the help of useCallback hook.
     o useCallback hook is different from the useMemo as useCallback return the function, 
     but useMemo returns the variable value.
 * 
 */

const NormalMethod = () => {
    const [number, setNumber] = useState();
    const [dark, setDark] = useState(false);

    const getItems = () => {
        return [number, number + 1, number + 2]
    }

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }

  return (
    <>
        <div style={theme}>
            <input 
                type='number'
                value={number}
                onChange={(e) => setNumber(e.target.value ? +e.target.value : '')}
             />

             <button onClick={() => setDark(prev => !prev)}>
                Toggle Theme
             </button>

             {number && <List getItems={getItems} />}
        </div>
    </>
  )
}

export default NormalMethod