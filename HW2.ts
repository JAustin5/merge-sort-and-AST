import { readFileSync, stat } from "node:fs";

const file : string = process.argv[2]
const sortLoc: number = Number(process.argv[3]);

const content : string = readFileSync(file, 'utf8')
const lines: string[] = content.split('\n')
const spot : string[][] = lines.map((line: string) => line.split(','));

const sorted = mergeSort(spot, sortLoc)
sorted.forEach((spot: string[]) => console.log(spot.join(',')))
console.log(" ")

function mergeSort(arr: string[][], spot: number) {
    if (arr.length == 1) return arr;

    const mid = Math.floor(arr.length / 2)
    const l = arr.slice(0, mid)
    const r = arr.slice(mid)
    
    return merge(spot, mergeSort(l, spot), mergeSort(r, spot));
}

function merge(indexLoc: number, left: string[][], right: string[][]) {
    let l_Pos : number = 0;
    let r_pos : number = 0;
    let state: string[][] = [];

    while(l_Pos < left.length && r_pos < right.length) {
        if(left[l_Pos][indexLoc].localeCompare(right[r_pos][indexLoc]) < 0) {
            state.push(left[l_Pos])
            l_Pos++
        }
        else {
            state.push(right[r_pos])
            r_pos++
        }
    }
    return state.concat(left.slice(l_Pos).concat(right.slice(r_pos)))
}