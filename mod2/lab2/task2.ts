function tuple_sum(tup: [number, number, number]): number {
    return tup[0]+tup[1]+tup[2];
}

const k: [number, number, number] = [3, 6, 9];
const tup_res: number = tuple_sum(k);
console.log(tup_res);
