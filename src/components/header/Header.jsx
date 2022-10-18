import peopleIcon from '../../assets/people.svg'
import moreIcon from '../../assets/more.svg'

function Header() {
  return (
    <header className='flex flex-row justify-between border-b border-black-25 p-4 sm:px-8 lg:p-10'>
      <h1 className='font-bungee text-2xl text-primary'>Whatscord</h1>
      <div className='flex gap-8'>
        <img
          src={peopleIcon}
          alt='users connected icon'
          className='flex w-6 lg:hidden'
        />
        <img
          src={moreIcon}
          alt='more options icon'
          className='flex w-6'
        />
      </div>
    </header>
  )
}

export default Header
