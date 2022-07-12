'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElements = function () {
    let createEl;
    let selec = this.selector.slice(1);
   
    if (this.selector[0] === '#') {
        createEl = document.createElement('p');
        createEl.id = selec
    } else {
        createEl = document.createElement('div');
        createEl.classList.add = selec
    }
    createEl.style.cssText = `
        width: ${this.width}px;
        height: ${this.height}px;
        background: ${this.bg};
    `;
    createEl.style.fontSize = `${this.fontSize}px`;
    createEl.textContent = "Hello world!!!";
    document.body.append(createEl)
    }

const domE = new DomElement('#selector', 100, 100, 'red', '16px')

// document.addEventListener("DOMContentLoaded", function() {
//     domE.createElements();
// });
domE.createElements();