const { Container } = require('../index')

test('value must be 2 after setValue', () => {
    const container = new Container({
        props: {
            val: 1
        }
    })

    expect(container.val.getValue()).toBe(1)

    container.val.setValue(2)

    expect(container.val.getValue()).toBe(2)
})