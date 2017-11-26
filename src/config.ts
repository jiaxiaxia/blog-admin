const devApi = '/api'
const prodApi = ''

let API = ''
if ('production' === ENV) {
    API = prodApi
} else {
    API = devApi
}
export const API_ROOT = API
