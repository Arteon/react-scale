'use strict';

import baseConfig from './base';

let config = {
    BASE_API: 'https://example.com/api/v1'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
