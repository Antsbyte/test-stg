#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const log = console.log;
const [patternPath = '1', nameTest = 'test'] = process.argv.slice(2);

if(!['1', '2'].includes(patternPath)) {
    log(chalk.red(
        chalk.red.underline.bold('No valid pattern included')
    ));
    process.exit(1);
}

const checkJest = async() => {
    try {
        await import('jest');
    } catch (error) {
        log(chalk.red(
            chalk.red.underline.bold('No jest installed')
        ));
        process.exit(1);
    }
}

const buildPath = {
    1: file => path.dirname(file) + `/${nameTest}/` + path.basename(file),
    2: file => {
        const dir = path.dirname(file).split('/');
        return [dir.at(0), `/${nameTest}/`, ...dir.slice(1), dir.slice(1).length == 0 ? '' : '/', path.basename(file)].join('');
    },
}

const transformExt = file => file.replace(/\.(js|ts|jsx|tsx)$/, '.test' + path.extname(file))

checkJest().then(() => {
    try {
        const modifiedFiles = execSync('git diff --name-only --cached', {encoding: 'utf-8'}).trim().split('\n');
        const testFilesPath = modifiedFiles.filter(file => file.match(/\.(js|jsx|ts|tsx)$/))
                                        .map(buildPath[patternPath])
                                        .map(transformExt)

        const testFiles = testFilesPath.filter(file => fs.existsSync(file));
        if(testFiles.length > 0) {
            execSync(`npx jest ${testFiles.join(' ')} -u`)
            return;
        }

        log(chalk.yellowBright(
            chalk.yellowBright.underline.bold('No test to run')
        ));
    } catch (error) {
        log(chalk.red(
            chalk.red.underline.bold('Error while executing tests')
        ));
        process.exit(error);
    }
})

