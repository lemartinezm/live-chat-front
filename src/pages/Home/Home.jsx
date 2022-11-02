import { useState } from 'react'
import moreIcon from '../../assets/more.svg'
import Drawer from '../../components/drawer/Drawer'

function Home() {
  const [nickname, setNickname] = useState('Unknown')
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Drawer
        isOpen={isOpen}
        title='User info'
        onClose={handleClose}
      >
        <div className='flex flex-col gap-4'>
          <img
            src={`https://source.boringavatars.com/beam/32/${nickname}?colors=233D4D,619B8A,D7E6E2`}
            alt={`${nickname}-avatar`}
            className='h-16 w-16 self-center'
          />
          <label className='flex flex-col gap-2'>
            <span className='font-bold text-black-100'>Nickname:</span>
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

          <label className='flex flex-col gap-2'>
            <span className='font-bold text-black-100'>Status:</span>
            <select className='flex-1 rounded-3xl border border-black-25 px-4 py-2'>
              <option value='online'>Online</option>
              <option value='ausent'>Ausent</option>
              <option value='offline'>Offline</option>
            </select>
          </label>
        </div>
      </Drawer>

      <header className='flex w-full justify-between border-b p-4'>
        <span className='font-bungee text-2xl'>Whatscord</span>

        <button onClick={() => setIsOpen(true)}>
          <img
            src={moreIcon}
            alt='more options icon'
            className='flex w-6'
          />
        </button>

        <div className='hidden'>
          <input
            value={nickname}
            placeholder='Your nickname'
            onChange={(e) => setNickname(e.target.value)}
          />
          <select>
            <option value='online'>Online</option>
            <option value='ausent'>Ausent</option>
            <option value='offline'>Offline</option>
          </select>
          <img
            src={`https://source.boringavatars.com/beam/32/${nickname}?colors=233D4D,619B8A,D7E6E2`}
            alt={`${nickname}-avatar`}
            className='h-16 w-16'
          />
        </div>
      </header>

      <main className='flex flex-1 flex-col items-center justify-center'>
        <span className='text-3xl font-bold text-black-75'>Welcome to</span>
        <h1 className='mt-4 font-bungee text-4xl'>Whatscord</h1>

        <button className='mt-8 rounded-[32px] bg-primary px-8 py-4 text-xl font-bold text-white'>
          Create Room
        </button>
        <button className='mt-4 rounded-[32px] border border-primary px-8 py-4 text-xl font-bold text-primary'>
          Join Room
        </button>
      </main>
    </div>
  )
}

export default Home
