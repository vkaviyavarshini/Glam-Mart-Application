import axios from "axios";
const URI='http://localhost:8181'

const getAppointment = () => axios.get(`${URI}/roll`)
const addAppointment = (Appointment) => axios.post(`${URI}/addappoint`,Appointment)
const editAppointment = (appoint_id,Appointment)=>axios.put(`${URI}/updateappoint/${appoint_id}`,Appointment)
const deleteAppointment=(appoint_id)=>axios.delete(`${URI}/deleteappoint/${appoint_id}`)

export {getAppointment,addAppointment,deleteAppointment,editAppointment}