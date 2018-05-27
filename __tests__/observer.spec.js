const { Container } = require('../index')

test('observer must trigger after setValue', () => {
    const container = new Container({
        props: {
            val: 1
        }
    })

    container.val.observe(value => {
        expect(value).toBe(2)
    })

    container.val.setValue(2)
})

test('observer must return an disposable instance', () => {
    const container = new Container({
        props: {
            val: 1
        }
    })

    const observerInstance = container.val.observe(value => { })

    expect(observerInstance.dispose).toBeInstanceOf(Function)
})

test('disposed observer no more exists', () => {
    const container = new Container({
        props: {
            val: 1
        }
    })

    const observerInstance = container.val.observe(value => { })

    expect(container.val._observers[observerInstance.id]).toBe(observerInstance)

    observerInstance.dispose()

    expect(container.val._observers[observerInstance.id]).toBeUndefined()
})

test('observe for previousValue returns 2', () => {
    const container = new Container({
        props: {
            val: 2
        }
    })

    container.val.observe((value, previous) => {
        expect(value).toBe(3)
        expect(previous).toBe(2)

        expect(container.val.getValue()).toBe(3)
    })

    container.val.setValue(3)
})

test('remove all observers must delete all handlers', () => {
    const container = new Container({
        props: {
            val: 1
        }
    })

    container.val.observe(val => { })

    expect(Object.keys(container.val._observers).length).toBe(1)

    container.val.removeAllObservers()

    expect(Object.keys(container.val._observers).length).toBe(0)
})