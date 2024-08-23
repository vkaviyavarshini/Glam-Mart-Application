import axios from "axios";


const username = 'max';
const password = '1811321';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};


const URI = 'http://localhost:7777'
const URI2 = 'http://localhost:7778'

//endpoint 1
const getProduct = () => axios.get(`${URI}/product/get`, { headers })
const getProductbyId = (id) => axios.get(`${URI}/product/find/${id}`, { headers })
const addProduct = (product) => axios.post(`${URI}/product/add`, product, { headers })
const editProduct = (id, product) => axios.put(`${URI}/product/edit/${id}`, product, { headers })
const deleteProduct = (id) => axios.delete(`${URI}/product/delete/${id}`, { headers })

const getUser = () => axios.get(`${URI}/user/get`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })
const editUser = (id, product) => axios.put(`${URI}/user/edit/${id}`, product, { headers })
const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, { headers })

const userLogin = (signin) => axios.post(`${URI}/user/signin`, signin, { headers })
const userRegister = (register) => axios.post(`${URI}/user/signup`, register, { headers })
const adminLogin = (signin) => axios.post(`${URI}/admin/login`, signin, { headers })
// -> dashboard
const getUserCount = () => axios.get(`${URI}/user/getcount`, { headers })
const getProductCount = () => axios.get(`${URI}/product/getcount`, { headers })


//endpoint 2
const getFeedback = () => axios.get(`${URI2}/feedback/get`)
const addFeedback = (feedback) => axios.post(`${URI2}/feedback/add`, feedback)
const deleteFeedback = (id) => axios.delete(`${URI2}/feedback/delete/${id}`)

const getFeedbacktCount = () => axios.get(`${URI2}/feedback/getcount`)
export { getProduct, getProductbyId, addProduct, editProduct, deleteProduct, getProductCount, getFeedback, addFeedback, deleteFeedback, getFeedbacktCount, getUser, getUserbyId, editUser, deleteUser, getUserCount, adminLogin,userLogin,userRegister }

