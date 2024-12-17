export default async function getData(url: string) {
  const res = await fetch(url)

  return res.json()
}
