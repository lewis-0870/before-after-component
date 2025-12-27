// custom component for an image slider
// creating a class so the custom element can be defined and reused

class ImageSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

// shadow DOM - used to keep the code for custom component separate from the rest of the DOM
// separate component can be reused without conflicts with the main styles or scripts

    connectedCallback() {
        const beforeImg = this.getAttribute('before');
        const afterImg = this.getAttribute('after');

// retrive the images from the attributes on the index file 