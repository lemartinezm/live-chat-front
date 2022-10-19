import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import Header from '../components/header/Header'
import Message from '../components/message/Message'

const socket = io(import.meta.env.VITE_API_URL)

function Room() {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [nickname, setNickname] = useState('')

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
    if (nickname && currentMessage)
      socket.emit('chat message', {
        nickname,
        message: currentMessage,
      })
    setCurrentMessage('')
  }
  return (
    <>
      <Header />
      <main className='App mx-auto my-4 flex w-full max-w-xs flex-1 flex-col gap-4'>
        <label className='flex gap-2'>
          Nickname:
          <input
            id='nickname'
            name='nickname'
            placeholder='Insert your nickname here'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </label>

        <div
          id='messages'
          className='flex flex-1 flex-col gap-4'
        >
          {messages.map((message, index) => (
            <Message
              key={`message-${index}}`}
              message={message.message}
              nickname={message.nickname}
              user={nickname}
            />
          ))}
          {messages.length === 0 && <p>There is no messages</p>}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            id='message'
            name='message'
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
