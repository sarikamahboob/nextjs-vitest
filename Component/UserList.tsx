import { User } from '@/types/entities'
import React from 'react'

const UserList = ({ users }: { users: User[] }) => {
  if(users.length === 0) {
    return <div>No users available</div>
  }
  return (
    <ul>
      {
        users.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default UserList