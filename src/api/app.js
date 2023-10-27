import axios from '../axios'

export const apiBanner = () => axios({
    url : '/banner',
    method : 'get'  
})
export const apiProductSale = () => axios({
    url: '/product',
    method: 'get'
})