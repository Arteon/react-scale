// export const THROW_ERROR_SERVER_REQUEST = 'SERVER_REQUEST_ERROR';
export const SEND_ERROR_TO_SERVER_FAIL = 'SEND_ERROR_TO_SERVER_FAIL';
export const SEND_ERROR_TO_SERVER_SUCCESS = 'SEND_ERROR_TO_SERVER_SUCCESS';

export const THROW_ERROR = (error) => {
    console.error(error, 'THROW_ERROR')
}

export const SEND_ERROR_TO_SERVER = (error) => {
    console.log(error, 'SEND_ERROR_TO_SERVER')
}

// export const REMOVE_AUDIO = (id) => {
//     return async function() {
//         let result = await removeAudio_API(id)
//         if (!resultOK(result)) {
//             return {type: REMOVE_AUDIO_FAIL, error: 'Sorry, error occured.'}
//         }
//         return {type: REMOVE_AUDIO_SUCCESS, result: id}
//     }
// }
// export const REMOVE_AUDIO = actionAsyncWrapper(removeAudio_API(arg)
// dispatch(OPEN_SIDEBAR()) = dispatch({action})
// REMOVE_AUDIO(id) -> {action}
//
// async function asyncWrapper() {
//
// }
