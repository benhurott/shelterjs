const { Container } = require('../index')

test('initial value must be 1', () => {
    const container = new Container({
        props: {
            val: 1
        }
    })

    expect(container.val.getValue()).toBe(1)
})

test('multiple props must have initial value', () => {
    const container = new Container({
        props: {
            val: 1,
            val2: 2
        }
    })

    expect(container.val.getValue()).toBe(1)
    expect(container.val2.getValue()).toBe(2)
})