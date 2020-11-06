export interface SodokuDigit {
    digit: number;
    isGiven: boolean;
}

class SodokuManager {
    static sodoku1: number[] = [
        5, 4, 8, 6, 0, 9, 2, 0, 0,
        0, 0, 0, 0, 0, 0, 5, 0, 8,
        0, 6, 0, 5, 1, 0, 0, 9, 0,
        2, 0, 4, 0, 0, 7, 3, 0, 0,
        9, 0, 0, 0, 0, 0, 1, 0, 0,
        7, 0, 6, 0, 5, 2, 0, 0, 9,
        0, 0, 0, 0, 2, 0, 8, 4, 7,
        0, 0, 3, 0, 4, 0, 0, 2, 0,
        0, 2, 1, 7, 8, 0, 0, 0, 0
    ];

    static sodoku2: number[] = [
        5, 6, 0, 9, 0, 0, 4, 2, 7,
        3, 0, 0, 6, 8, 0, 9, 0, 0,
        0, 9, 0, 0, 0, 4, 0, 0, 0,
        0, 2, 0, 0, 0, 5, 8, 0, 1,
        8, 0, 1, 0, 2, 0, 3, 0, 0,
        4, 0, 0, 8, 9, 0, 0, 5, 6,
        7, 3, 0, 1, 0, 0, 0, 9, 0,
        2, 1, 9, 0, 0, 0, 0, 6, 4,
        0, 8, 0, 4, 0, 0, 0, 3, 2
    ];

    public static getSodoku(): SodokuDigit[] {
        return this.buildSodoku(this.sodoku2)
    }

    private static buildSodoku(sodokuAsNumbers: number[]): SodokuDigit[] {
        let sodoku: SodokuDigit[] = [];

        sodokuAsNumbers.forEach(element => {
            sodoku.push({ digit: element, isGiven: element === 0 ? false : true });
        });

        return sodoku;
    }
}

export default SodokuManager;