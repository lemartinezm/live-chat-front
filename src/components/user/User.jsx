import online from '../../assets/online.svg'
import ausent from '../../assets/ausent.svg'
import offline from '../../assets/offline.svg'

function User({ nickname, currentStatus }) {
  return (
    <div className='flex items-center gap-8'>
      <img
        src={`https://source.boringavatars.com/beam/32/${nickname}?colors=233D4D,619B8A,D7E6E2`}
        alt={`${nickname}-avatar`}
        className='h-16 w-16'
      />
      <div>
        <h3 className='text-xl font-bold text-black-100'>{nickname}</h3>
        {renderStatus(currentStatus)}
      </div>
    </div>
  )
}

function renderStatus(status) {
  return (
    <div className='flex gap-3'>
      {status === 'Online' ? (
        <img
          src={online}
          alt={`status icon`}
        />
      ) : status === 'Ausent' ? (
        <img
          src={ausent}
          alt={`status icon`}
        />
      ) : (
        <img
          src={offline}
          alt={`status icon`}
        />
      )}
      <span className='text-black-100'>{status}</span>
    </div>
  )
}

export default User
