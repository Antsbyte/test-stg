
import fs from 'fs';
import child_process from 'child_process';

describe('index', () => {

    it('should build correct paths', () => {
        //jest.spyOn(child_process, 'execSync').mockImplementation(() => ['mock1.js', 'mock2.js']);
        //jest.spyOn(fs, 'existsSync').mockImplementation(() => true);

        expect(() => {
            execSync('node src/index.js');
        }).toThrow();
        //expect(true).toBe(true);
    })
})