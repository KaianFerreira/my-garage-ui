import api from '../libs/api'

export const getAll = async () => {
  const { data } = await api.get('brand')

  return data
}