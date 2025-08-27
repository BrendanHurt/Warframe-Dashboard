import {EOL} from 'os';
import { appendFileSync } from 'fs';
import * as pgMonitor from 'pg-monitor';
import { IInitOptions } from 'pg-promise';

//add a dev flag later

const logFile = './errors.log';

pgMonitor.setLog((msg, info) => {
    let logText = EOL + msg;

    if (info.event === 'error') {
        logText = EOL + logText;
    }
    appendFileSync(logFile, logText);
});

export class Diagnostics {
    static init<Ext = {}>(options: IInitOptions<Ext>) {
        //add check for dev flag

        pgMonitor.attach(options);
    }
}