import { LitElement, html,css } from 'lit';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
import { getData} from '../helpers/getDataHandle';
import styles from './index-component.css' with {type: 'css'}
export class IndexComponent extends LitElement {

    
    static styles = [styles]

    static get properties () {
        return {
            data:{
                type:Array
            }
        }
    }

    constructor(){
        super()
        this.data = []
    }

    firstUpdated () {
        getData(API_URL).then(res=>this.data=res)
    }

    searchHandle = (search) => {
        if (search===''){
            getData(API_URL).then(res=>this.data=res)
        } else{
            getData(`${SEARCH_API}${search}`).then(res=>this.data=res)
        }
    }

    render() {
        return html` 
            <nav-component
                @my-event = ${(e)=>{this.searchHandle(e.detail)}}
            ></nav-component>
            <div class='container'>

                ${this.data.length !==0 ?
                    this.data.map((movie) => {
                        return html`<card-component .data=${movie}></card-component>`
                    }): html `<h1>NO HAY RESULTADOS </h1>`
                }
            </div>
        `;
    }
}
customElements.define('index-component', IndexComponent);