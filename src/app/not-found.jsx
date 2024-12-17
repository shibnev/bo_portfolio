import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className='text-center'>
      <h2 className='text-3xl'>404 - Not Found</h2>
      <Link href='/' className='underline text-secondary'>go back</Link>
    </section>
  )
}
