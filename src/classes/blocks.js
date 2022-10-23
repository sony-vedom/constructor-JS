import {row, col} from "../utilis";

class Block {
    constructor(secondText, themeName, mainText) {
        this.secondText = secondText
        this.themeName = themeName;
        this.mainText = mainText;
    }
    toHTML () {
        throw new Error('Нет метода HTML(((')
    }
}

export class CardBlock extends Block {
    constructor(secondText, themeName, mainText) {
        super(secondText, themeName, mainText);
    }

    toHTML() {
        return row(col(`${this.secondText}`), this.themeName, this.mainText);
    }
}
