import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import Header from '../../components/header/Header'
import Message from '../../components/message/Message'
import RoomDescription from '../../components/roomDescription/RoomDescription'
import shake from '../../assets/shake.svg'
import biSend from '../../assets/bi_send.svg'
import Drawer from '../../components/drawer/Drawer'
import User from '../../components/user/User'

export const roomTitle = 'Los egresados de exito'
export const roomNumber = 142
export const users = [
  {
    id: 1,
    nickname: 'Cabra',
    status: 'Online',
  },
  {
    id: 2,
    nickname: 'Sandy',
    status: 'Ausent',
  },
  {
    id: 3,
    nickname: 'Villa',
    status: 'Offline',
  },
]

const socket = io(import.meta.env.VITE_API_URL)
let timeoutId

function Room() {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [nickname, setNickname] = useState('')
  const [usersWriting, setUsersWriting] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg])
    })

    socket.on('writing', (userWriting) => {
      if (!usersWriting.includes(userWriting) && userWriting !== nickname) {
        setUsersWriting((prev) => Array.from(new Set([...prev, userWriting])))
      }
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setUsersWriting([])
      }, 1000)
    })

    return () => {
      socket.off('chat message')
      socket.off('writing')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nickname && currentMessage) {
      socket.emit('chat message', {
        nickname,
        message: currentMessage,
      })
    }
    setCurrentMessage('')
  }

  const handleWriting = (e) => {
    setCurrentMessage(e.target.value)
    socket.emit('writing', nickname)
  }

  return (
    <div className='flex h-screen w-full flex-col lg:flex-row'>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Users'
      >
        <div className='flex flex-col gap-4'>
          {users.map((user) => (
            <User
              key={user.id}
              nickname={user.nickname}
              currentStatus={user.status}
            />
          ))}
        </div>
      </Drawer>

      <div className='border-r border-black-25'>
        <Header onSocialClick={() => setIsOpen(true)} />
        <div className='hidden flex-col gap-4 px-8 py-4 lg:flex'>
          {users.map((user) => (
            <User
              key={user.id}
              nickname={user.nickname}
              currentStatus={user.status}
            />
          ))}
        </div>
      </div>
      <main className='App flex w-full flex-1 flex-col gap-4 overflow-hidden p-4'>
        <RoomDescription
          title={roomTitle}
          number={roomNumber}
        />

        <label className='flex items-center gap-2'>
          <span className='font-bold text-primary'>Nickname:</span>
          <input
            id='nickname'
            name='nickname'
            className='flex-1 rounded-3xl border border-black-25 px-4 py-2'
            placeholder='Insert your nickname here'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </label>

        <div
          id='messages'
          className='flex flex-1 flex-col gap-4 overflow-y-auto'
        >
          {messages.map((message, index) => (
            <Message
              key={`message-${index}}`}
              message={message.message}
              nickname={message.nickname}
              user={nickname}
            />
          ))}
          {messages.length === 0 && <p>There are no messages</p>}
        </div>

        <div
          className={
            usersWriting.length > 0
              ? 'opacity-100 transition-opacity'
              : 'opacity-0'
          }
        >
          {usersWriting.map((userWriting, index) => (
            <span
              key={index}
              className='italic text-black-75'
            >
              {userWriting} is writing...
            </span>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex w-full items-center gap-4'
        >
          <input
            id='message'
            name='message'
            className='flex-1 rounded-3xl border border-black-25 px-4 py-2'
            placeholder='Write your message here'
            value={currentMessage}
            onChange={handleWriting}
          />

          <button
            type='submit'
            className='h-8 w-8'
          >
            <img
              src={shake}
              alt='shake icon'
            />
          </button>
          <button
            type='submit'
            className='h-8 w-8 rounded-full bg-primary p-2'
          >
            <img
              src={biSend}
              alt='send icon'
            />
          </button>
        </form>
      </main>
    </div>
  )
}

export default Room
