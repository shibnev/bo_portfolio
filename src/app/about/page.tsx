import CodeText from '@/components/CodeText';
import PageInner from '@/components/PageInner';
import getData from '@/helpers/getData';
import { RestApi } from '@/types';

export default async function About() {
  const dataBase = await getData(RestApi.url)
  const menu = dataBase?.contacts
  const content = dataBase?.pages?.about?.content

  return (
    <PageInner menu={menu}>
      <h2>_about_me</h2>
      <CodeText>{content}</CodeText>
    </PageInner>
  )
}
