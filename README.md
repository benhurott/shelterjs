# shelterjs
A simple data state container for js projects.

![LOGO](docs/shelterjs-logo.png)

## Why?
I like data container and state management in my js projects but redux and other libraries are so much complex than they have to.

Instead create actions, reducers, containers, merge containers, handle async actions with middlewares and import a lot of libs to use with our favorite frontend framework, I just like to use some like this:

```js
import myContainer from './my-container'

class MyComponent extends React.Component {
    constructor(props) {
        super(props)

        myContainer.myProp.observe(this._handleStateChange.bind(this))
    }

    _handleStateChange(data) {
        //,,,,
    }
}
```

When I want to change data on my container, I like to use in this way:

```js
myContainer.myProp.setValue('foo')
```

And thats it!

All observers now will receive the new prop value.

## Install

In terminal, just run: `npm install shelterjs`

## Usage
### Configuring the container:
```js
// import the library
import { Container } from 'shelterjs'

// instance new container (yes, you can have more than one =])
const myContainer = new Container({
    // define your properties with their initial values.
    props: {
        myProp1: 'initial value'
    }
})
```

### Observing container changes for a single prop:
```js
myContainer.myProp1.observe(value => {
    // do something...
})

// you can also take a previous value
myContainer.myProp1.observe((currentValue, previousValue) => {
    // do something...
})
```

### Get value without observing:
```js
const myValue = myContainer.myProp1.getValue()
```

### Dispose observers:
```js
const myObserverInstance = myContainer.myProp1.observe(value => {
    // do something...
})

// when you want to remove the observer, just call:
myObserverInstance.dispose()
```

### Change value in container
```js
myContainer.myProp1.setValue('the new value')
```

### Creating properties at runtime
If you want to add new properties to a existing container, use the `createProperty` function:
```js
myContainer.createProperty('foo', 'initial value')

console.log(myContainer.foo.getValue()) // initial value
```