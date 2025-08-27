import * as config from './db-config.json';
//import pgPromise = require('pg-promise');
import { IInitOptions, IDatabase, IMain } from 'pg-promise';
import { IRepos, ItemsRepo } from './repos';
import { Diagnostics } from './diagnostics';

type ExtendedProtocol = IDatabase<IRepos> & IRepos;

const initOptions: IInitOptions<IRepos> = {
    extend(obj: ExtendedProtocol, dc: any) {
        obj.items = new ItemsRepo(obj, pgp);
    }
}

const pgp: IMain = require('pg-promise')(initOptions);
const db: ExtendedProtocol = pgp(config);

Diagnostics.init(initOptions);

export { db, pgp };