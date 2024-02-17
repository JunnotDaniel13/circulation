"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_autogen_1 = require("swagger-autogen");
var doc = {
    info: {
        version: "v1.0.0",
        title: "Circulation API Project",
        description: "Implementation of Swagger with TypeScript",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
    },
};
var outputFile = "./swagger.json";
var endpointsFiles = ["./index.ts"];
(0, swagger_autogen_1.default)({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
