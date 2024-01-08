import api from '../libs/api'

export const getAll = async () => {
  const { data } = await api.get('brand')

  return data
}

export const create = async (name) => {
  const { data } = await api.post('brand', { name })
  
  return data
}