import * as API from './index';

export const getRet=(data)=>{
    return API.POST('/api/v1/auth/reg',data)
}

export const DENGLU=(data)=>{
    return API.POST('/api/v1/auth/login',data)
}
export const getHeader=(data)=>{
    return API.Header('/api/v1/users/manager_info',data)
}
export const getUser=(data)=>{
    return API.GET('/api/v1/users/info',data)
}

