import { LightningElement, api, wire, buildCustomElementConstructor } from 'lwc';

import { Time } from '../../wire/time'

/**
 * Greetings component that shows what an LWC component can provide.
 */
export default class Greetings extends LightningElement {

    /**
     * This is a property that can be set from an attribute
     */
    @api name = ''

    /**
     * This is a property that comes from a wire adapter
     * @readonly
     */
    @wire(Time) time = {};

    /**
     * This is a simple property
     */
    @api message = 'Glad to see you'

    /**
     */
    get greetings() {
        return `${this.message}, ${this.name}`
    }
}

//customElements.define("hello-greetings", buildCustomElementConstructor(Greetings));
