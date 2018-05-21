const { Container } = require('../index')

test('create property "foo" with initial value "test"', () => {
    const container = new Container({
        props: {}
    })

    container.createProperty('foo', 'test')

    expect(container.foo.getValue()).toBe('test')
})