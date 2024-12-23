import PageInner from '@/components/PageInner';
import getData from '@/helpers/getData';
import { RestApi } from '@/types';

export default async function About() {
  const dataBase = await getData(RestApi.url)
  const menu = dataBase?.pages?.about?.menu

  return (
    <PageInner menu={menu}>
      <h1>_about_me</h1>
    </PageInner>
  )
}
