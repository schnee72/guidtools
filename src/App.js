import { h } from 'preact';
import Generate from './Generate';
import Validate from './Validate';

const App = () => (
  <div>
  <h1>guids</h1>
  <Generate />
  <Validate />
  <div class="float-left">
    <a href="https://github.com/schnee72/guidtools">github</a>
  </div>
</div>
);

export default App;
