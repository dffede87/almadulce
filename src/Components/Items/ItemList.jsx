import React from 'react'
import Item from './Item'

export default function ItemList({productos}) {
  return (
    productos.map(item => (
        <Item id={item.id} nombre={item.title} precio={item.price} categoria={item.categoryId} imagen={item.imageId} />
    ))
  )
}
