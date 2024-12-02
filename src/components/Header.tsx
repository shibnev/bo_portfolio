import Burger from './Burger';

export default function Header() {
  return (
    <header className='flex justify-between border-b border-solid border-dark p-4'>
      <p className='text-sm text-primaryLight'>micheal-weaver</p>

      <Burger />
    </header>
  )
}
