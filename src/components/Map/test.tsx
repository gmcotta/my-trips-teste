import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render without marker', () => {
    render(<Map />)

    screen.logTestingPlaygroundURL()

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Guarulhos',
        slug: 'guarulhos',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: '2',
        name: 'Osasco',
        slug: 'osasco',
        location: {
          latitude: 20,
          longitude: 40
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/guarulhos/i)).toBeInTheDocument()
    expect(screen.getByTitle(/osasco/i)).toBeInTheDocument()
  })
})
