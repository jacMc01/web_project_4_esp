import {initialCards, Card} from "./Card.js";


// renderizar las cards
export function fillInitCards() {
  const obj = {
    items: initialCards,
    renderer: Card.setupCard
  }

  const intialCardElements = new Section(obj, ".elements");
  intialCardElements.renderer();
}

class Section {
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