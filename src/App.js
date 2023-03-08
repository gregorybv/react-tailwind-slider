import React, { useState } from "react"
import

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1580164631075-b3f1304f4051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1608889345749-630640d94426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ]

  return (
    <div className='max-w-[1400px] h-[780px] m-auto py-16 px-4 relative'>
      <div
        style={{ backgroundImage: `url(${slides[0].url}) ` }}
        className='w-full h-full rounded-2xl bg-center duration-500'
      ></div>
      {/* Left arrow */}

      {/* Right arrow */}
    </div>
  )
}

export default App
