import { h, Component } from 'preact';

const NOT = 'not a guid';
// const IS = 'is a guid';

export default class Validate extends Component {
  constructor() {
    super();
    this.state = {labelClass: NOT};
  }

  render(){
    return (
      <div>
        <h2>validate</h2>
        <input class="three-hundred"/>
        <button>check</button>
        <div><label class="hidden">{this.state.labelClass}</label></div>
      </div>
    );
  }
}
