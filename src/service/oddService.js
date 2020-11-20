import api from './api'

const getAuthorizationHeader = async () => {
    const session = await JSON.parse(localStorage.getItem('session'))
    return session?.access_token
}

export const getEsportes = async (esportes) => {
    const token = await getAuthorizationHeader()
     const { data: response } = await api.post('/odds/esportes', esportes,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    return response
}
