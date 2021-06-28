import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/test-link">Test</LinkWrapper>)

    const children = screen.getByRole('link', { name: /test/i })
    screen.logTestingPlaygroundURL()

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/test-link')
  })
})
