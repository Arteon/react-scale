'use strict';

import baseConfig from './base';

let config = {
    isDev: true,
    BASE_API: 'http://localhost:8000/api/v1'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
