import { LitElement, html, css } from 'lit-element';
import styles from './nav-component.css' with { type: 'css' }; 

export class NavComponent extends LitElement {

    static styles = [styles]

    handleEvent = (value) => {
        const event = new CustomEvent('my-event', {
            detail:value 
        });
        this.dispatchEvent(event)
    }

    render() {
        return html`
            <nav> 
                <input class='search' type='text' placeholder='Search'
                    @change = ${e=>{this.handleEvent(e.target.value)}}
                >
            </nav>
        `;
    }
}
customElements.define('nav-component', NavComponent);