import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, it } from 'vitest'
import User from './User'

const nickname = 'Coby'
const currentStatus = 'Online'

describe('user tests', () => {
  beforeEach(() => {
    render(
      <User
        nickname={nickname}
        currentStatus={currentStatus}
      />
    )
  })

  afterEach(cleanup)

  it('should show the nickname', () => {
    screen.getByText(nickname)
  })

  it('should show the avatar', () => {
    screen.getByAltText(`${nickname}-avatar`)
  })

  it('should show the status', () => {
    screen.getByAltText('status icon')
    screen.getByText(currentStatus)
  })
})
