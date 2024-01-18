class CreateDuck extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const duckId = this.getAttribute('duck-id') || '';
      this.shadowRoot.innerHTML = `
      <h2> New Duck 1</h2>
        <form action="add" method="post"> 
            <label>id:</label>
            <input type="text" id="id" name="id"/>
            <a href="/inventory"> Cancel</a>
            <button type="submit">Create</button>
        </form>
      `;
      console.log('duckid', duckId)
    }

  }
  
  customElements.define('create-duck-component', CreateDuck);