import { Balls } from './task3';

type Ball = {
    type: Balls;
    brand: string;
    size: number;
    color: string;
};

const JB800: Ball = {
    type: Balls.Basketball,
    brand: 'Jogel',
    size: 7,
    color: 'brown'
};

const json_ball: string = JSON.stringify(JB800);
console.log(json_ball);
