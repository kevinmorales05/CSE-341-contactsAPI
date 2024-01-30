const swaggerAutoGen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users API',
        description: 'Users Api'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutoGen(outputFile, endpointsFiles, doc);