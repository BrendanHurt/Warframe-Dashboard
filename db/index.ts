import * as config from './db-config.json';
import pgPromise = require('pg-promise');
import { IInitOptions, IDatabase, IMain } from 'pg-promise';
import { IRepos, ItemsRepo } from './repos';

type ExtendedProtocol = IDatabase<IRepos> & IRepos;

const initOptions: IInitOptions<IRepos> = {
    extend(obj: ExtendedProtocol, dc: any) {
        obj.items = new ItemsRepo(obj, lib);
    }
}

const lib: IMain = pgPromise(initOptions);
const db = lib(config);

export default db;