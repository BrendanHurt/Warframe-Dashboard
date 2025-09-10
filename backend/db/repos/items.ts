import {IDatabase, IMain} from 'pg-promise'
import { IItems } from '../models'
import {items as sql} from '../sql'

export class ItemsRepo {
    constructor(private db: IDatabase<any>, private lib: IMain<any>) {
        //helpers can be set up here to have them serve as singletons
    }

    create(): Promise<null> {
        return this.db.none(sql.create);
    }

    add(values: {name: string}): Promise<IItems> {
        return this.db.one(sql.add, {name: values.name});
    }
}