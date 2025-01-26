import { User } from '@/types/entities'
import UserList from '../../Component/UserList'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('UserList', () => {
  it('should render no users when the array is empty', () => {
    render(<UserList users={[]} />)
    const message = screen.getByText(/no users available/i)
    expect(message).toBeInTheDocument()
  })
  it("should render a list of users when the array is not empty", () => {
    const users: User[] = [
      {
        id: '123',
        name: 'john',
      },
      {
        id: '456',
        name: 'sarika',
      },
    ]
    render(<UserList users={users} />);
    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  });
})