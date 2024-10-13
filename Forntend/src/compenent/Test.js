import React from 'react'
import { useState } from 'react';

export default function Test() {
    const [note, setNote] = useState(['hii']);


  return (
    <div>
        <button > ADD</button>
      <div className="box border-red-400">
        {note}
      </div>
    </div>
  )
}
