import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'

class AppElement extends PolymerElement {
  constructor () {
    super()
    this.msg = 'Soy un componente de polymer :3'
  }

  static get is () {
    return 'app-element'
  }

  static get template () {
    return html`
      <h1>{{msg}}</h1>
    `
  }
}

export default AppElement
