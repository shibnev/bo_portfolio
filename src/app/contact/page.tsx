import Form from '@/components/Form';
import PageInner from '@/components/PageInner';
import getData from '@/helpers/getData';
import { RestApi } from '@/types';

export default async function Contact() {
  const dataBase = await getData(RestApi.url)
  const menu = dataBase?.contacts

  return (
    <PageInner menu={menu}>
      <h2 className='mb-2'>Contact me</h2>
      <Form />
    </PageInner>
  )
}
