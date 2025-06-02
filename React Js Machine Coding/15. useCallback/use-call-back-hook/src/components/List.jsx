import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // setItems(getItems());
        setItems(getItems(3));
        console.log('uploading items');
    }, [getItems])


  return (
    <div>
    {
        items.map((item) => (<div key={item}>{item}</div>))
    }
    </div>
  )
}

export default List