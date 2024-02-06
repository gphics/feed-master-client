import fetchData from "./fetchData";

export default async function bactchCreate(url, method, arr) {
  const promisifiedArr = arr.map(
    async (elem) => await fetchData(url, method, elem)
  );
  const result = await Promise.allSettled(promisifiedArr);
  result.forEach(elem => {
    if (elem.value.err) {
      console.log(err)
    }
  })
  return result;
}
