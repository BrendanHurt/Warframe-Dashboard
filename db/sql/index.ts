import { QueryFile, IQueryFileOptions } from "pg-promise";
import { join } from 'path';

function sql(file: string): QueryFile {
    const fullPath: string = join(__dirname, file);
    const options: IQueryFileOptions = {
        //
    }
    const query = new QueryFile(fullPath, options);
    return query;
}

export const items = {
    create: sql('items/create.sql'),
}