import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactForm } from '../app/components/ContactForm'
import '@testing-library/jest-dom'

describe('ContactForm', () => {
  it('should render the ContactForm component', () => {
    render(<ContactForm />)
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })
})