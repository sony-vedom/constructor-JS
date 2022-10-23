import {CardBlock} from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.form = this.$el.querySelector("#form");
        this.update = updateCallback;

        this.form.addEventListener('submit', this.add.bind(this));


    }

    add(event){
        event.preventDefault();
        const formData = new FormData(this.form);

        const mainText = formData.get('title');

        const select = (this.form).querySelector('select')
        const theme = select.options[select.selectedIndex]
        const themeName = theme.dataset.name;

        const secondText = formData.get('description');

        const newBlock = new CardBlock (secondText, themeName, mainText);

        this.update(newBlock);

        event.target.title.value = '';
        event.target.description.value = '';
    }
}