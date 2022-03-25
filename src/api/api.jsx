import { API_HOST, A, E, UB } from '../utils/constant'
export async function getData(section) {
  try {
    const url = `${API_HOST}/${section}/?a=${A}&e=${E}&ub=${UB}`

    const res = await fetch(url)
    const result = await res.json()

    return result
  } catch (e) {
    console.log(e)
  }
}
