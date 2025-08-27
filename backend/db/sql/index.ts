import { QueryFile, IQueryFileOptions } from "pg-promise";
import { join } from 'path';

function sql(file: string): QueryFile {
    const fullPath: string = join(__dirname, file);
    const options: IQueryFileOptions = {
        minify: true
    }
    const query = new QueryFile(fullPath, options);

    if (query.error) {
        console.error(query.error);
    }

    return query;
}

export const items = {
    create: sql('items/create.sql'),
}