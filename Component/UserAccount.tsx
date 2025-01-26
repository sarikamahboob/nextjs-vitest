import { User } from '@/types/entities'
import React from 'react'

const UserAccount = ({user}: {user: User}) => {
  return (
    <div>
      <h2>User Profile</h2>
      {
        user.isAdmin && <button>Edit</button>
      }
      <div>
        <strong>Name:</strong> {user.name}
      </div>
    </div>
  )
}

export default UserAccount