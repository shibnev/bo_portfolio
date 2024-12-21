// import Aside from '@/components/Aside';
import Container from '@/components/Container';
import Form from '@/components/Form';

export default function Contact() {
  return (
    <section className='flex-1 flex'>
      {/* <Aside /> */}
      <Container className='relative z-10 py-8 flex-1 flex flex-col'>
        <h2 className='mb-2'>Contact me</h2>
        <Form />
      </Container>
    </section>
  )
}
