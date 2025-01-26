import UserAccount from '../../Component/UserAccount'
import { User } from '@/types/entities'
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react'

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = {
      id: '123',
      name: 'john',
    }
    render(<UserAccount user={user} />)
    const userName = screen.getByText(user.name)
    expect(userName).toBeInTheDocument();
  })
  it("should render edit button if user is admin", () => {
    const user: User = {
      id: "123",
      name: "john",
      isAdmin: true,
    };
    render(<UserAccount user={user} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should not render edit button if user is not admin", () => {
    const user: User = {
      id: "123",
      name: "john",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
})