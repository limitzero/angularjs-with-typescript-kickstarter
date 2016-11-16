module MyApp {
    'use strict'; 

    export class CalculatorService {

        static IID = 'CalculatorService';

        public add(x: number, y: number) : number {
            return x + y;
        }

        public subtract(x: number, y:number): number {
            return x - y;
        }
    }
}