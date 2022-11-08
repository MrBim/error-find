const getQuestions = async () => {
  const url = ``
  const res = fetch(url);
  return await (await res).json()
}
export { getQuestions }
