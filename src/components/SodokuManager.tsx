import Cell from "./Cell/Cell";

class SodokuManager {

    private static instance: SodokuManager;

    private puzzle: number[] = [
        8, 2, 7, 3, 0, 0, 0, 4, 9,
        6, 4, 9, 0, 5, 0, 8, 3, 0,
        0, 0, 0, 4, 8, 9, 6, 0, 0,
        0, 0, 0, 6, 0, 1, 2, 0, 0,
        2, 1, 0, 0, 0, 7, 0, 0, 6,
        4, 9, 0, 0, 0, 0, 1, 5, 7,
        1, 8, 0, 0, 2, 4, 7, 0, 0,
        0, 0, 0, 0, 7, 3, 0, 0, 0,
        3, 0, 4, 1, 0, 0, 0, 0, 0
    ];

    private cells: Cell[] = new Array(81);
    private addedCells: number = 0;

    private constructor() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    public static GetInstance(): SodokuManager {
        if (!SodokuManager.instance)
            SodokuManager.instance = new SodokuManager();

        return SodokuManager.instance;
    }


    public AddCell(cell: Cell) {
        this.cells[cell.props.positionX + (cell.props.positionY * 9)] = cell;
        this.addedCells++;

        if (this.addedCells === 9 * 9)
            this.setCells();
    }

    private setCells() {
        for (let x: number = 0; x < 9; x++)
            for (let y: number = 0; y < 9; y++) {
                let index: number = x + (y * 9);
                if (this.puzzle[index] > 0)
                    this.cells[index].setState({ isGiven: true, number: this.puzzle[index] }); //profit!
            }

        console.log(this.cells);
    }

    private handleKeyPress(e: KeyboardEvent) {
        if (e.key !== "1" && e.key !== "2" && e.key !== "3" && e.key !== "4" && e.key !== "5" && e.key !== "6" && e.key !== "7" && e.key !== "8" && e.key !== "9")
            return;

        // this.cells.forEach((cell: Cell) => {
        //     if (cell.state.isHighlighted)
        //         console.log("hy");
        // });

        console.log(this.cells);
    }

    private CheckForErrors(): boolean {
        return false;
    }
}
export default SodokuManager;