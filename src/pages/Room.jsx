import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

const socket = io(import.meta.env.VITE_API_URL)

function Room() {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg])
    })

    return () => {
      socket.off('chat message')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('chat message', currentMessage)
    setCurrentMessage('')
  }
  return (
    <>
    <header>
      <h1 className='font-bungee text-primary' >Whatscord</h1>
    </header>
    <main className='App'>
      <ul id='messages'>
        {messages.map((message, index) => (
          <li key={`msg-${index}`}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          id='input'
          name='input'
          placeholder='Write your message here'
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </main>
    </>
  )
}

export default Room
