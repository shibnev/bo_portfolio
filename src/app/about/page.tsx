import CodeText from '@/components/CodeText';
import PageInner from '@/components/PageInner';
import getData from '@/helpers/getData';
import { RestApi } from '@/types';

export default async function About() {
  const dataBase = await getData(RestApi.url)
  const menu = dataBase?.contacts
  const content = dataBase?.pages?.about?.content

  return (
    <PageInner menu={menu} >
      <div className='flex flex-col gap-4'>
        <h2>_about_me</h2>
        <CodeText>{content}</CodeText>

        <a
          className='mt-4 text-sm text-white bg-warning px-8 py-4 rounded-md w-max hover:bg-primaryLight transition-colors hover:text-primaryDark'
          target='_blank' href="/anton_shibnev_cv.pdf">see my cv</a>

      </div>
    </PageInner>
  )
}
