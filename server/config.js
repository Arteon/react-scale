export default {
    port: 8080,
    jwt: {
        secret: 'traptrap',
        credentialsRequired: false,
        getToken(req) {
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                return req.headers.authorization.split(' ')[1];
            } else if (req.query && req.query.token) {
                return req.query.token;
            }
            return null;
        }
    }
}
