/**
 * Fetches data from the given URL and returns the response as JSON.
 * 
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<any>} - A promise that resolves to the JSON response.
 */
export default async function getData(url: string) {
  const res = await fetch(url)

  return res.json()
}
