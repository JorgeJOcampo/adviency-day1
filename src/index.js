import {LitElement, html} from 'lit';
import "./index.css"

class MyElement extends LitElement {
  render() {
    return html`
    <div class="center">
      <h1>Regalos</h1>
      <p>Vitel Tone</p>
      <p>Vitel Tone</p>
      <p>Vitel Tone</p>
    </div>
    `;
  }
}
customElements.define('my-element', MyElement);
