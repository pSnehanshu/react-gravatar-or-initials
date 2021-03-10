# react-gravatar-or-initials

> React component to display user avatars from Gravatar or initials from UI-Avatars.com

[![NPM](https://img.shields.io/npm/v/react-gravatar-or-initials.svg)](https://www.npmjs.com/package/react-gravatar-or-initials) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-gravatar-or-initials
```

## Usage

View example [here](https://psnehanshu.github.io/react-gravatar-or-initials/)

```jsx
import React, { Component } from 'react'

import Avatar from 'react-gravatar-or-initials'
import 'react-gravatar-or-initials/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Avatar
        email='hello@snehanshu.com'
        name='Snehanshu Phukon'
        size={120}
        fontSize={0.5}
        initialsLength={2}
        color='8b5d5d'
        bgColor='f0e9e9'
        uppercase
      />
    )
  }
}
```

View example [here](https://psnehanshu.github.io/react-gravatar-or-initials/)


## License

MIT © [pSnehanshu](https://github.com/pSnehanshu)
