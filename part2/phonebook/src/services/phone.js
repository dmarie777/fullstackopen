import axios from 'axios'
const url = '/api/persons'

const getAll = () => {
    return axios
            .get( url)
            .then(response => {
                return response.data
             })
}

const create = (obj) => {
    return axios
            .post(url, obj) 
            .then(response => {
                return response.data
            })
}

const deletePerson = (id, obj) => {
    return axios
            .delete(`${url}/${id}`, obj) 
            .then(response => {
                return response
            })
}

const update = (id, obj) => {
    return axios
            .put(`${url}/${id}`, obj)
            .then(response => {
                return response.data
            })
}

export default { getAll, create, deletePerson, update}