export async function getData(section) {
  try {
    const url = `https://workcore.net/apiv2/web/${section}/?a=124&e=28&ub=http://workcore.net/`
    console.log(url)
    const res = await fetch(url)
    const result = await res.json()
    console.log(result)
    return result
  } catch (e) {
    console.log(e)
  }
}
