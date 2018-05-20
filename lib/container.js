// import ValueProp from './value-prop'

const ValueProp = require('./value-prop')

module.exports = class Container {
    constructor(configuration) {
        this._configuration = configuration

        this._instanceProperties()
    }

    _instanceProperties() {
        const props = this._configuration.props

        Object.keys(props).forEach(p => {
            this[p] = new ValueProp(props[p])
        })
    }
}