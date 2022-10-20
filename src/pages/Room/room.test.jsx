import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Room, { roomNumber, roomTitle } from './Room'

const testNickname = 'Coby'
const testMessage = 'Hello world'

describe('room page tests', () => {
  beforeEach(() => {
    render(<Room />)
  })

  afterEach(cleanup)

  it('should render the header component', () => {
    screen.getByText('Whatscord')
    screen.getByAltText('users connected icon')
    screen.getByAltText('more options icon')
  })

  it('should render the description component', () => {
    screen.getByText(roomTitle)
    screen.getByText(`Room ${roomNumber}`)
  })

  it('should render nickname input', () => {
    screen.getByLabelText('Nickname:')
    screen.getByPlaceholderText('Insert your nickname here')
  })

  it('can send a message', async () => {
    const user = userEvent.setup()

    const nicknameInput = screen.getByPlaceholderText(
      'Insert your nickname here'
    )
    await user.type(nicknameInput, testNickname)
    expect(nicknameInput.value).toBe(testNickname)

    const messageInput = screen.getByPlaceholderText('Write your message here')
    await user.type(messageInput, testMessage)
    expect(messageInput.value).toBe(testMessage)
    const sendButton = screen.getByText('Send')
    await user.click(sendButton)
    expect(messageInput.value).toBe('') // ! no pone en blanco el valor al hacer click

    // screen.getAllByText(testNickname)
    // screen.getByText(testMessage)
  })
})
