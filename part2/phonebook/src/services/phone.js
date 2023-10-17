import axios from 'axios'
const url = 'http://localhost:3001/persons'

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

export default { getAll, create, deletePerson}