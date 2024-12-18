'use client'

import { useState } from 'react'
import Button from './Button'
import Post from '@/helpers/PostEmail'

export default function Form() {
  const [isLoading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    setLoading(true)

    const data: FormData = { name, email, message }

    await Post({ from: data.email, name: data.name, message: data.message });
    setLoading(false)
  }

  return (
    <form
      className='flex flex-col gap-4 max-w-sm'
      onSubmit={handleSubmit}
    >
      <label className='flex flex-col gap-1 main-text'>
        <span>_name</span>
        <input
          className='w-full border border-solid border-primaryLight rounded-md bg-primaryDark p-2'
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className='flex flex-col gap-1 main-text'>
        <span>_email</span>
        <input
          className='w-full border border-solid border-primaryLight rounded-md bg-primaryDark p-2'
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className='flex flex-col gap-1 main-text'>
        <span>_message</span>
        <textarea
          className='w-full border border-solid border-primaryLight rounded-md bg-primaryDark p-2'
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <Button
        type='submit'
        disabled={isLoading}
        className='mt-4'
      >
        {isLoading ? '...adding' : 'submit-message'}
      </Button>
    </form>
  )
}
