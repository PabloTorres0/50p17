import { LitElement, html, css } from 'lit';
import styles from './card_component.css'with {type: 'css'}
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

export class CardComponent extends LitElement {

    static styles = [styles]
    
    static get properties () {
        return {
            data:{
                type:Object
            }, disabled:{
                type: Boolean
            }
        }
    }
    
    constructor(){
        super()
        this.disabled = false
    }

    render() {
        return html`
            <section>
                <img src=${IMG_PATH+this.data?.img} alt=${this.data?.title}>
                <div class='information'>
                    <div class='title'>${this.data?.title}</div>
                    <div class=${`score ${this.data.score >= 8 ? 'green' : this.data.score >= 5 ? 'orange' : 'red' }`}>${this.data?.score}</div>
                </div>
                <div>
                    <div class='overview'>
                        <p>Overview</p>
                        ${this.data?.overview}
                    </div>
            </section>
        `;
    }
}
customElements.define('card-component', CardComponent);