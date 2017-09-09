import { h, Component } from 'preact';

export default class Guid extends Component {
  constructor(props) {
    super(props);
    this.state = {guidClass: ''};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.guid !== this.props.guid)
      this.setState({ guidClass: '' });
  }

  handleClick = () => {
    this.clipy(this.props.guid);
    this.setState({guidClass: 'orange'});
  };

  clipy = val => {
    let textfield = document.createElement('textarea');
    textfield.innerHTML = val;
    document.body.appendChild(textfield);
    textfield.select();
    document.execCommand('copy');
    textfield.remove();
  };

  render() {
    return (
      <div>
        <span class={this.state.guidClass}>{this.props.guid}</span>
        <button onclick={this.handleClick}>copy</button>
      </div>
    );
  }
}
