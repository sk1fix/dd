function max_elem(array: number[]): number {
    if (array.length == 0) 
        return 0;
    let max: number = array[0];
    for (let i: number = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}


function is_negative(array: number[][]): boolean {
    const x: number = array.length;
    const y: number = array[0].length;
    if (x == 0) 
        return true;
    for (let i: number = 0; i < x; i++){
        for (let j: number = 0; j < y; j++){
            if (array[i][j] < 0)
                return false;
        }
    }
    return true;
}
const m: number[] = [2.42, -7.9, 2.71, 1.618, 0.577, 4.669];
const res: number = max_elem(m);
console.log(res);

const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const nmatrix: number[][] = [[1, 2, 3], [4, -5, 6], [7, 8, 9]];   
const tres: boolean = is_negative(matrix);
const fres: boolean = is_negative(nmatrix);
console.log(tres, fres); 
