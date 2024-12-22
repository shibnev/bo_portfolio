import PageInner from '@/components/PageInner';
import getData from '@/helpers/getData';
import { RestApi } from '@/types';

export default async function Projects() {
  const dataBase = await getData(RestApi.url)
  const menu = dataBase?.pages?.projects?.menu

  return (
    <PageInner menu={menu}>
      <h2>_projects</h2>
    </PageInner>
  )
}
