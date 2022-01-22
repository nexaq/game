
const getFunctions = () => {
    try {
        const {'postcss-functions' : functions} = require('./dist/extras/postcss-functions');
        return functions;
    } catch (e) {
        return {};
    }
}

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('postcss-for'),
        require('postcss-import'),
        require('postcss-functions')({
            functions: getFunctions(),
        }),
    ]
}