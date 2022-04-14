import React from 'react'
import Item from './Item'

export default function ItemList({productos}) {
  return (
    productos.map(item => (
        <Item id={item.id} nombre={item.nombre} precio={item.precio} categoria={item.categoria} imagen={item.imagen} />
    ))
  )
}
