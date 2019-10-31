import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface ProductTourModel {
    getClientTop(elementId: string): number;
    getClientLeft(elementId: string): number;
    getElement(elementId: string): SafeHtml;
    getHeader(): string;
    getImage(): string;
    getText(): string;
    getPrevious(): boolean;
    getNext(): boolean;
    getClonedElement(): object;
    setActive(value: boolean): void;
    getActive(): boolean;
    resolveWidthToBorderRatio(): void;
}

export class ProductTourClass implements ProductTourModel {
    private header;
    private image;
    private text;
    private previous;
    private next;
    private target;
    private active;
    private cloned_element;
    private sanitize: DomSanitizer;

    constructor(sanitize: DomSanitizer,
        header: string, image: string, text: string, previous: boolean, next: boolean, target: string, active: boolean = false) {
        this.sanitize = sanitize;
        this.header = header;
        this.image = image;
        this.text = text;
        this.previous = previous;
        this.next = next;
        this.target = target;
        this.active = active;
        this.cloned_element = {
            position: {
                top: this.getClientTop(),
                left: this.getClientLeft(),
                width: this.getClientWidth()
            },
            element: this.getElement()
        };
        this.resolveWidthToBorderRatio();
    }

    getClientLeft() {
        if (this.target) {
            return document.getElementById(this.target).getBoundingClientRect().left;
        }
    }

    getClientTop() {
        if (this.target) {
            return document.getElementById(this.target).getBoundingClientRect().top;
        }
    }

    getClientWidth() {
        if (this.target) {
            return document.getElementById(this.target).getBoundingClientRect().width;
        }
    }

    getElement(): SafeHtml {
        if (this.target) {
            const element = document.getElementById(this.target);

            if (this.target === 'hoppsWrapperMobile') {
                element.classList.remove('w-70');
            }

            const result = this.sanitize.bypassSecurityTrustHtml(element.outerHTML);
            return result;
        }
    }

    getHeader() {
        return this.header;
    }

    getImage() {
        return this.image;
    }

    getText() {
        return this.text;
    }

    getNext() {
        return this.next;
    }

    getPrevious() {
        return this.previous;
    }

    getActive() {
        return this.active;
    }

    setActive(value: boolean): void {
        this.active = value;
    }

    getClonedElement() {
        return this.cloned_element;
    }

    resolveWidthToBorderRatio() {
        this.cloned_element.position.width += 4;
        this.cloned_element.position.left -= 2;
    }
}
