import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

api.interceptors.response.use(undefined, async (err) => {
    const res = err.response
    if (res && res.status === 401) {
        window.location.href = '/login'
    }
    else if(res && res.status === 500){
        throw new Error({ message: 'Erro interno do servidor' })
    }
    else if(res && res.status === 400){
        if(res.data.error_description === 'Bad credentials'){
            throw new Error('Email ou senha incorretos')
        }else if(res.data?.errors[0]?.messageUser){
            throw new Error(res.data.errors[0].messageUser)
        }
    }
    return Promise.reject(err)
  })

export default api