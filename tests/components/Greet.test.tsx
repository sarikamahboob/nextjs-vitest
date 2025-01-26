import { render, screen } from '@testing-library/react';
import Greet from '../../Component/Greet';
import React from 'react';

describe('Greet', () => {
  it('should render Hello with the name when name is provided', () => {
    render(<Greet name='john' />)
    const heading = screen.getByRole('heading', {level: 1})
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/hello john/i)
  })
  it('should render Login button when name is not provided', () => {
    render(<Greet />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/login/i)
  })
}) 