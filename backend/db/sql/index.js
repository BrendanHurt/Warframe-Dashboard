"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = void 0;
const pg_promise_1 = require("pg-promise");
const path_1 = require("path");
function sql(file) {
    const fullPath = (0, path_1.join)(__dirname, file);
    const options = {
        minify: true
    };
    const query = new pg_promise_1.QueryFile(fullPath, options);
    if (query.error) {
        console.error(query.error);
    }
    return query;
}
exports.items = {
    create: sql('items/create.sql'),
    add: sql('items/add.sql')
};
