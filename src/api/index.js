import axios from 'axios';

let baseUrl=process.env.API_URL;

export const GET=(url,params)=>{
  return axios.get(`${baseUrl}${url}`,{params:params}).then((data)=>{return data})
}

export const POST=(url,params)=>{
  return axios.post(`${baseUrl}${url}`,params).then(data=>data)
}

export const Header=(url,headers)=>{
  return axios.get(`${baseUrl}${url}`,{headers:headers}).then(data=>data)
}
export const pHeader=(url,params,headers)=>{
  return axios.post(`${baseUrl}${url}`,params,{headers:headers}).then(data=>data)
}
// export const gHeader=(url,headers)=>{
//   return axios.get(`${baseUrl}${url}`,{headers:headers}).then(data=>data)
// }