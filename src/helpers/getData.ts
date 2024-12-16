export default async function getData(url: string) {
  const res = await fetch(url, {
    next: {
      revalidate: 0 //use 0 to optimize out of using cache
    }
  })

  return res.json()
}
