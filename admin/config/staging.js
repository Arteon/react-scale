'use strict';

import baseConfig from './base';

let config = {
    BASE_API: 'https://stage.gigmngr.com/api/v1',
    STATIC_URL: 'https://stage.gigmngr.com/static'
};

export default Object.freeze(Object.assign(baseConfig, config));
