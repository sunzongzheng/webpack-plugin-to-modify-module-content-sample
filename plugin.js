class comDepPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(this.constructor.name, compilation => {
            compilation.hooks.finishModules.tapPromise(this.constructor.name, async(modules) => {
                modules.forEach(m => {
                    m._source._value = [
                        `var component = {}`,
                        `component.field = 1`,
                        `module.exports = component`,
                    ].join('\n')
                })
            })
        })
    }
}

module.exports = comDepPlugin
