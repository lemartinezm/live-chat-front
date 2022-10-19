import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, it } from 'vitest'
import Message from './Message'

const testMessage = 'Hello world'
const messageAuthor = 'nickname'

describe('message tests', () => {
  beforeEach(() => {
    render(
      <Message
        message={testMessage}
        nickname={messageAuthor}
      />
    )
  })

  afterEach(cleanup)

  it('should render message author', () => {
    screen.getByText(messageAuthor)
  })

  it('should render text content', () => {
    screen.getByText(testMessage)
  })
})
