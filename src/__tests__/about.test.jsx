import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from '../app/components/About'
import '@testing-library/jest-dom'

describe('About', () => {
  it('should render the About component', () => {
    render(<About />)
    expect(screen.getByText('Sobre')).toBeInTheDocument()
  })
})