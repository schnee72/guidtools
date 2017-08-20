import {h, Component} from 'preact';
import './Guid.css';

/* eslint-disable no-console */

export default class Guid extends Component {
  copy = () => {
    console.log(this.props.guid);
  };

  render() {
    return (
      <div><span class="guid">{this.props.guid}</span><button onClick={this.copy}>copy</button></div>
    );
  }
}
