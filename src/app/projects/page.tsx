import PageInner from '@/components/PageInner';
import getData from '@/helpers/getData';
import { RestApi } from '@/types';

export default async function Projects() {
  const dataBase = await getData(RestApi.url)
  const menu = dataBase.pages.projects.menu

  console.log(menu)

  return (
    <PageInner menu={menu}>
      <h1>_projects</h1>
    </PageInner>
  )
}
