// import genGuid from './gen-guid'
const genGuid = require('./gen-guid')

class ValuePropObserver {
    constructor(handler, vinculatedProperty) {
        this.id = genGuid()
        this.handler = handler
        this._vinculatedProperty = vinculatedProperty
    }

    dispose() {
        this._vinculatedProperty.removeObserver(this)
    }
}

module.exports = class ValueProp {
    constructor(initialValue) {
        this._value = initialValue
        this._observers = {}
    }

    getValue() {
        return this._value;
    }

    observe(handler) {
        const propObserver = new ValuePropObserver(handler, this)
        this._observers[propObserver.id] = propObserver

        return propObserver
    }

    setValue(newValue) {
        const oldValue = this._value
        this._value = newValue

        Object.keys(this._observers).forEach(o => {
            this._observers[o].handler(newValue, oldValue)
        })
    }

    removeObserver(observer) {
        delete this._observers[observer.id]
    }
}