import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function converter(
    accumulator: number,
    number: number,
    i: number,
    array: any
): number {
    if (array[i] > array[i + 1]) {
        accumulator += number;
    } else if (array[i] < array[i + 1]) {
        accumulator -= number;
    }

    return accumulator;
}

function romanToInt(romanString: string): number {
    const romanStringChars = romanString.split('');
    const numbers = romanStringChars.map((x) => romans[x]);

    const returnValue = numbers.reduce((acc, number, index) =>
        converter(acc, number, index, numbers)
    );

    return returnValue;
}

Coco.setColor('firewood');
Coco.start();
validateFxn(romanToInt('MCMXCIV'), 1994);
Coco.end();

export {};
