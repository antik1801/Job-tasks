import React from 'react'
import CardTitle from './CardTitle'

export default function Cart({item}) {
  return (
    <div className='min-h-16 bg-white p-3 rounded-2xl'>
        <CardTitle title={item.title}/>
    </div>
  )
}
