export default {
    init: () => {

        // REAL DEV API (NODE)
        window.__USE_PRODUCTION_API__ = (url = 'http://localhost:8000/api/v1') => {
            window.BASE_API = url
        }
        // FAKE API (JSON-SERVER)
        window.__USE_FAKE_API__ = (url = 'http://localhost:4000/api/v1') => {
            window.BASE_API = url
        }

        window.onload = () => {
            console.log('ADD API SWITCHER IN WINDOW')
        }
        // Console dev
        console.todo = function(msg) {
            console.log('%c %s %s %s ', 'color: yellow; background-color: black;', '--', msg, '--')
        }
        console.important = function(msg) {
            console.log('%c%s %s %s', 'color: brown; font-weight: bold; text-decoration: underline;', '--', msg, '--')
        }

        window.__USE_PRODUCTION_API__()
    }
}
