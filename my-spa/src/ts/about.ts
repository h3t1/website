import section1Template from '../templates/about.html';

export default class Section1 {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('div');
        this.element.innerHTML = section1Template;
    }

    mount(parent: HTMLElement) {
        parent.appendChild(this.element);
    }

    unmount() {
        this.element.remove();
    }
}
