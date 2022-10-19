function RoomDescription({ title, number }) {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold text-primary'>{title}</h2>
      <p className='font-bold text-black-50'>Room {number}</p>
    </div>
  )
}

export default RoomDescription
