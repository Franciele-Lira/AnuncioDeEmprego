class CardNews extends HTMLElement { //mesmo comportamento de uma tag html.
constructor(){
    super();

    const shadow = this.attachShadow({mode: "open"}) //começo da nossa arvore
    shadow.innerHTML = "<h1></h1>";

}

}

customElements.define('card-news', CardNews) // metodo customizado