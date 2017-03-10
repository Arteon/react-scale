import {get, post, del} from '../utils';


export async function getPhoto_API() {
    return await get('/photos/')
}

export async function addPhoto_API(data) {
    return await post('/photos/', data)
}

export async function removePhoto_API(id) {
    return await del(`/photos/${id}/`)
}

export async function getAudio_API() {
    return await get('/sounds/')
}

export async function addAudio_API(data) {
    return await post('/sounds/', data)
}

export async function removeAudio_API(id) {
    return await del(`/sounds/${id}/`)
}

export async function getVideo_API() {
    return await get('/videos/')
}

export async function addVideo_API(data) {
    return await post('/videos/', data)
}

export async function removeVideo_API(id) {
    return await del(`/videos/${id}/`)
}
