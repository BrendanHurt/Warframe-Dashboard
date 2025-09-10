"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsRepo = void 0;
const sql_1 = require("../sql");
class ItemsRepo {
    constructor(db, lib) {
        this.db = db;
        this.lib = lib;
        //helpers can be set up here to have them serve as singletons
    }
    create() {
        return this.db.none(sql_1.items.create);
    }
    add(values) {
        return this.db.one(sql_1.items.add, { name: values.name });
    }
}
exports.ItemsRepo = ItemsRepo;
