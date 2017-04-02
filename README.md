# React-Scale
## [Under development!]
### Preface:
I think, that you've ever had a situation in your project, when you have 2 almost similar apps with common css, common components, but they're still so different.

This repo may provide a good example how to solve problems associated with this issue.

### Main idea:
Create app, that will be:

    - scalable  - easily add any new feature without breaking already written code.
    - big - it means really big, not a f$$$ing hello-world or one-line-example.
    - robust - robustness is the most important.
    - theory-powered(?) - FP, patterns, etc.

### To start:
```bash
    # ------DEVELOPMENT------

    # Run both apps:
    npm run dev # user_app is available at 3000 port, admin - 3030.

    # Run admin app:
    npm run admin_dev
    # Run user app:
    npm run user_dev


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
- [ ] Add server
- [ ] Add more tests
- [ ] Add socket.io

# License
MIT

# Author
Vladimir Metnew, <vladimirmetnew@gmail.com>    
