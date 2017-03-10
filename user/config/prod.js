'use strict';

import baseConfig from './base';

let config = {
    BASE_API: 'http://localhost:8000/api/v1',
    STATIC_URL: 'http://localhost:8000/static'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
