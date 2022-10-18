import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, it } from 'vitest'
import Header from './Header'

describe('header tests', () => {
  beforeEach(() => {
    render(<Header />)
  })

  afterEach(cleanup)

  it('should render app title', () => {
    screen.getByText('Whatscord')
  })

  it('should render users connected icon', () => {
    screen.getByAltText('users connected icon')
  })

  it('should render more options icon', () => {
    screen.getByAltText('more options icon')
  })
})
