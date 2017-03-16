{
    "moduleFileExtensions": ["js", "jsx"],
    "testPathIgnorePatterns": [
        "<rootDir>/user/config", "<rootDir>/admin"
    ],
    "moduleNameMapper": {
        "^shared_module$": "<rootDir>/shared_module",
        "^shared_module/api$": "<rootDir>/shared_module/api",
        "^shared_module/actions$": "<rootDir>/shared_module/actions/index.js",
        "^shared_module/reducers$": "<rootDir>/shared_module/reducers",
        "^shared_module/components$": "<rootDir>/shared_module/components",
        "^shared_module/containers$": "<rootDir>/shared_module/containers",
        "^shared_module/utils": "<rootDir>/shared_module/utils",

        "^actions$": "<rootDir>/user/actions",
        "^reducers$": "<rootDir>/user/reducers",
        "^routing": "<rootDir>/user/routing",
        "^components$": "<rootDir>/user/components",
        "^containers$": "<rootDir>/user/containers",
        "^config$": "<rootDir>/user/config/test.js"
    }
}
