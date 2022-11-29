export default async function useFetch(url: string) {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();

    if (!res.ok) throw data;

    return data;
  } catch (e) {
    return e;
  }
}
