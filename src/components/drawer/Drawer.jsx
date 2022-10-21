import close from '../../assets/close.svg'
import propTypes from 'prop-types'

function Drawer({ title, isOpen, onClose, children }) {
  return (
    <div
      className={`absolute z-50 bg-white ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } h-screen w-3/4 max-w-md border-r border-black-10 transition-transform`}
      aria-label='drawer'
    >
      <div className='flex gap-4 border-b border-black-10 p-4'>
        <h2 className='flex-1 font-inter text-xl font-bold'>{title}</h2>
        <button
          aria-label='Close'
          onClick={onClose}
        >
          <img
            src={close}
            alt='close icon'
          />
        </button>
      </div>
      <div className='p-4'>{children}</div>
    </div>
  )
}

Drawer.propTypes = {
  title: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  children: propTypes.node,
}

export default Drawer
