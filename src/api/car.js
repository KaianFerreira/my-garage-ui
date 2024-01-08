import api from '@/libs/api'

export const getAll = async () => {
	const { data } = await api.get('car')
	return data
}

export const create = async (
	brand,
	model,
	color,
	specs
) => {
	const { data } = await api.post('car', {
		brand,
		model,
		color,
		specs
	})
	return data
}

