import {getLocalToken} from '../common/AuthSvc';
import {isObject} from 'lodash';
import {THROW_ERROR} from '../../actions'

export function requestWrapper(method) {
    return async function(url, data = null, params = {}) {
        // default params to fetch = method + (Content-Type for lulz)
        let defaults = {
            method: method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }
        // console.log(url, data, params)
        if (method === 'GET') {
            // GET HAVE ONLY params and url
            params = data
            data = null
        } else if (isObject(data)) {
            if (data instanceof FormData) {
                delete defaults.headers['Content-Type']
            } else {
                data = JSON.stringify(data)
            }

            // or is it a PUT, POST, DELETE?
        } else {
            // hmm, strange...
            throw new Error(`XHR invalid, check ${method} for url ${url}`)
        }

        // check that req url is relative and request was sent to our domain
        if (true) {
            let token = getLocalToken();
            if (token) {
                defaults.headers['Authorization'] = `JWT ${token}`;
            }
            if (window.BASE_API) {
                url = window.BASE_API + url
            }
            // } else {
            // if req was sent to another domain
            // yes, it might happens one day
            // it looks like we have to add some handlers here
            // }

            // if there is no data => it's GET.
            if (data) {
                defaults.body = data;
            }

            let paramsObj = {
                ...defaults,
                headers: {
                    ...params,
                    ...defaults.headers
                }
            }

            try {
                return await fetch(url, paramsObj)
                // .then(checkStatus)
                    .then(parseJSON).catch((err) => {
                    console.error(err)
                    return THROW_ERROR(err);
                })
            } catch (e) {
                console.log('Catched error in request. utils.js', e)
                return {}
            }
        }
    }
}

// middlewares
// parse fetch json and return it
async function parseJSON(res) {
    let json;
    try {
        json = await res.json()
    } catch (e) {
        if (res.status == 204) {
            return {ok: true, data: {}}
        }
        return {ok: false}
    }
    if (!res.ok) {
        return {data: json, ok: false}
    }
    // XXX: be carefull, resultOK - is a function with side effects
    return {data: json, ok: true}
}
// checks reqs status
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response
//   } else if(response.status == 400){
//       return response
//   } else  {
//     var error = new Error(response.statusText)
//     error.response = response
//     console.error(error)
//     throw error
//     // return response
//
//   }
// }

export const get = requestWrapper('GET')
export const post = requestWrapper('POST')
export const put = requestWrapper('PUT')
export const patch = requestWrapper('PATCH')
export const del = requestWrapper('DELETE')

// USAGE:
// get('https://www.google.com', {
//     Authorization: 'JWT LOL',
//     headers: {
//         'Content-Type': 'text/html'
//     }
// })

// SIDE EFFECTS FUNCTION
export function resultOK(result) {
    if (result) {
        let ok = result.ok
        delete result.ok
        return ok //look at parseJSON
    } else {
        return false
    }
}
