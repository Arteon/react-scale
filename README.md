# React-Scale
## [WORKS(Broken temporarily), but still is under development]
[![David](https://img.shields.io/david/Metnew/react-scale.svg)]()
[![David](https://img.shields.io/david/dev/Metnew/react-scale.svg)]()
[![Known Vulnerabilities](https://snyk.io/test/github/metnew/react-scale/badge.svg)](https://snyk.io/test/github/metnew/react-scale)

### Preface:
I think, that you've ever had a situation in your project, when you have 2 almost similar apps with common css, common components, but they're still so different.

This repo may provide a good example how to solve problems associated with this issue.

Anywhere, it's a big example/starter

### Main idea:
Create app, that will be:

    - scalable  - easily add any new feature without breaking already written code.
    - big - it means not a f$$$ing hello-world or one-line-example.
    - robust - robustness is the most important.

### To start:
```bash
    # ------DEVELOPMENT------

    # Run both apps:
    npm run dev # user_app is available at 3000 port, admin - 3030.

    # Run admin app:
    npm run admin_dev
    # Run user app:
    npm run user_dev


    # Run server:
    npm run server:dev # reload on changes (by nodemon)
    npm run server # run app


    # ------BUILD------

    # Build admin application:
    npm run admin_build

    # Build user application:
    npm run admin_build


    # ------TEST------

    # Test both apps:
    npm run test

    # Test admin app:
    npm run test:admin

    # Test user app:
    npm run test:user

    # Test admin app (with watch):
    npm run test:admin:watch

    # Test user app (with watch):
    npm run test:user:watch
```

### Plans:
- [ ] Add SSR
- [x] Add server
- [x] Add some tests
- [ ] Add socket.io

# License
MIT

# Author
Vladimir Metnew, <vladimirmetnew@gmail.com>    
