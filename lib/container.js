// import ValueProp from './value-prop'

const ValueProp = require('./value-prop')

module.exports = class Container {
    constructor(configuration) {
        this._configuration = configuration

        this._instanceProperties()
    }

    createProperty(name, initialValue) {
        this[name] = new ValueProp(initialValue)
    }

    _instanceProperties() {
        const props = this._configuration.props

        Object.keys(props).forEach(p => {
            this.createProperty(p, props[p])
        })
    }
}