import api from './api'

export const getCurrentSession = async () =>{
    const session = await JSON.parse(localStorage.getItem('session'))
    return session
}

const generateAuthorizationHeader = () => {
    const username = 'angularapp'
    const password = '12345'

    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    return token
}

export const login = async ({ username, password, grant_type = 'password' }) => {

    let bodyFormData = new FormData();
    bodyFormData.append('username', username)
    bodyFormData.append('password', password)
    bodyFormData.append('grant_type', grant_type)

    const { data: response } = await api.post('/oauth/token',
        bodyFormData
        , {
            headers: {
                'Authorization': `Basic ${generateAuthorizationHeader()}`
            }
        })
    localStorage.setItem("session", JSON.stringify(response))
}


export const logout = async () => {
    localStorage.removeItem("session")
}

export const register = async (userData) => {
    const { data: response } = await api.post('/clientes', userData)
    return response
}
