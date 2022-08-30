import {Card} from "./Card.js";

export function fillInitCards(items) {
  const obj = {
    items: items,
    renderer: Card.setupCard
  }

  const intialCardElements = new Section(obj, ".elements");
  intialCardElements.renderer();
}

export default class Section {
    constructor({items, renderer}, element){
        this._items = items;
        this._renderer = renderer;
        this._element = element;
    }

    renderer(){
        this._items.forEach(item => {
        const itemElement = this._renderer(item)
        this.addItem(itemElement)
        }
      )
    }

    addItem(domItem){
      const domElement = document.querySelector(this._element)
      domElement.appendChild(domItem)
    }
}