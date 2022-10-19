function Message({ message, nickname, user }) {
  return (
    <div
      className={
        nickname === user
          ? 'rounded-3xl rounded-tr-none border border-secondary bg-secondaryPastel px-6 py-3'
          : 'rounded-3xl rounded-tl-none border border-secondary bg-secondaryPastel px-6 py-3'
      }
    >
      <h3>{nickname}</h3>
      <p>{message}</p>
    </div>
  )
}

export default Message
