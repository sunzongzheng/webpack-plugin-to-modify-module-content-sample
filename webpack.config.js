const plugin = require('./plugin')

module.exports = {
    entry: './entry.js',
    plugins: [
        new plugin()
    ],
    target: 'node',
    mode: 'development'
}
