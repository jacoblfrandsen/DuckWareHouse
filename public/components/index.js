class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <a href="/"> Duck WareHouse</a>
      <ul>
          <li><a href="/inventory"> Inventory</a></li>
          <li><a href="/inventory/new"> Add Duck</a></li>

      </ul>
      `;
    }
  }
  
  customElements.define('header-component', Header);