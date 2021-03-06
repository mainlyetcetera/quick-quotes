const fetchData = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    throw res
  }

  const data = await res.json()
  return data
}

export { fetchData }
