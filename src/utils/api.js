const fetchData = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    const msg = `An error has occurred: ${res.status} ${res.statusText}`
    console.log('error', msg)
    throw new Error(msg)
  }

  const data = await res.json()
  return data
}

export { fetchData }
