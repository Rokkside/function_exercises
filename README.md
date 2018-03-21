# Getting started

## MacOS

```sh
# Install NVM https://github.com/creationix/nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

# Install node https://nodejs.org/en/
nvm install 9.8.0
nvm alias default 9.8.0

# Install Jest https://facebook.github.io/jest/
npm install -g jest

# run the tests!
jest

# run a specific test
jest __tests__/01_empty_func_test.js
```

Edit the file to get the test passing and run tests again.
