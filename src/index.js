
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
    const modifiedFiles = execSync('git diff --name-only --cached', {encoding: 'utf-8'}).trim().split('\n');
    const testFilesPath = modifiedFiles.filter(file => file.match(/\.(js|jsx|ts|tsx)$/))
                                    .map(file => path.dirname(file) + '/test/' + path.basename(file));
    const testFiles = testFilesPath.filter(file => fs.existsSync(file));
    if(testFiles.length > 0) {
        execSync(`npx jest ${testFiles.join(' ')} -u`)
    }
} catch (error) {
    console.log('Error while executing tests');
    process.exit(1);
}
