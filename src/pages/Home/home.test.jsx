import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Home from './Home'

describe('home page tests', () => {
  beforeEach(() => {
    render(<Home />)
  })

  afterEach(cleanup)

  it('should render the header', () => {
    const appName = screen.getAllByText('Whatscord')
    expect(appName).toHaveLength(2)

    screen.getByPlaceholderText('Your nickname')

    const statusSelector = screen.getByRole('combobox')
    expect(statusSelector).toHaveLength(3)

    screen.getByRole('img') // finish this
  })

  it('should render the app title and welcome', () => {
    screen.getByText('Welcome to')
    const appName = screen.getAllByText('Whatscord')
    expect(appName).toHaveLength(2)
  })

  it('should render the create and join room buttons', () => {
    screen.getByText('Create Room')
    screen.getByText('Join Room')
  })
})
