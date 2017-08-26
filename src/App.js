import { h, Component } from 'preact';
import Generate from './Generate';
import Validate from './Validate';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>guids</h1>
        <Generate />
        <Validate />
        <div class="float-left">
          <a href="https://github.com/schnee72/guidtools">github</a>
        </div>
      </div>
    );
  }
}
