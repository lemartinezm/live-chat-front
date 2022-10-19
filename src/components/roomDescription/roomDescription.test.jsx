import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, it } from 'vitest'
import RoomDescription from './RoomDescription'

const roomTitle = 'This is my room title'
const roomNumber = 1

describe('room description tests', () => {
  beforeEach(() => {
    render(
      <RoomDescription
        title={roomTitle}
        number={roomNumber}
      />
    )
  })

  afterEach(cleanup)

  it('should render room title', () => {
    screen.getByText(roomTitle)
  })

  it('should show room description', () => {
    screen.getByText(`Room ${roomNumber}`)
  })
})
