import React, {useState, useEffect} from 'react'

export const ItemsList = ({getItems}) => {

const [items, setItems] = useState([])

useEffect(() => {
    const newItems = getItems()
    setItems(newItems)
    console.log('render from ItemsList')
}, [getItems])
    return (
        <ul>
            {items.map((i) => <li key={i}>{i}</li>)}
        </ul>
    )
}