import * as API from './index';

export const getBook=(data)=>{
    return API.GET('/api/v1/products',data)
}

export const getPost=(data)=>{
    return API.POST('/detail.php',data)
}
export const getHeader=(data)=>{
    return API.Header('/api/v1/users/manager_info',data)
}