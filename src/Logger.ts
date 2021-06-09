import './types/types';
import chalk from 'chalk';

export class Logger {
    private scope: ValueType;
    private logType: LogType = null;

    constructor(scope: ValueType = null) {
        this.scope = scope;
    }

    log(value: ValueType = null, logType: LogType = null): void {
        this.logType = logType;

        if (!value) return; // if no value to print return

        // if no scope directly print value
        if (!this.scope) this.write(value);
        else {
            const formatedOutput = `${this.scope}: ${value}`;
            this.write(formatedOutput);
        }
    }

    // write function that will be used to print out values
    private write(value: string): void {
        let colorFn = <T extends unknown>(v: T): T => v;

        if (this.logType === 'error') colorFn = chalk.red;
        if (this.logType === 'info') colorFn = chalk.blue;
        if (this.logType === 'warn') colorFn = chalk.yellow;
        if (!this.logType) colorFn = chalk.reset;

        console.log(colorFn(value));
    }
}

const logger = new Logger();
logger.log('mwana wumunyarwanda');

const l2 = new Logger('dev');
l2.log('mwaaa');
l2.log();
l2.log('');

const l3 = new Logger('dev');
l3.log('error', 'error');

l3.log('warn', 'warn');

l3.log('info', 'info');

const strJson = `
{
  "glossary": {
      "title": "example glossary",
  "GlossDiv": {
          "title": "S",
    "GlossList": {
              "GlossEntry": {
                  "ID": "SGML",
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "GlossDef": {
                      "para": "A meta-markup language, used to create markup languages such as DocBook.",
          "GlossSeeAlso": ["GML", "XML"]
                  },
        "GlossSee": "markup"
              }
          }
      }
  }
}`;

l3.log(strJson);
