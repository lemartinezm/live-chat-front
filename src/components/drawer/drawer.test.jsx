import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Drawer from './Drawer'

describe('drawer tests', () => {
  afterEach(cleanup)

  it('should render children', () => {
    render(
      <Drawer>
        <h1>Hello world</h1>
        <span>This is a description</span>
      </Drawer>
    )
    screen.getByText('Hello world')
    screen.getByText('This is a description')
  })

  it('should call close drawer function', async () => {
    const mockHandleClose = vi.fn()
    const user = userEvent.setup()
    render(
      <Drawer
        onClose={mockHandleClose}
        title='My title'
      >
        <span>Hello world</span>
      </Drawer>
    )

    const closeButton = screen.getByLabelText('Close')
    await user.click(closeButton)
    expect(mockHandleClose).toHaveBeenCalledOnce()
  })

  it.skip('should maintain close if isOpen is false', () => {
    const mockHandleClose = vi.fn()
    const user = userEvent.setup()

    render(
      <Drawer
        onClose={mockHandleClose}
        title='My title'
        isOpen={false}
      >
        <span>Hello world</span>
      </Drawer>
    )

    expect(screen.getByLabelText('drawer').style.display).toBe('hidden')

  })
})
