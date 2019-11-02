import * as React from 'react';
import Button from 'react-bootstrap/Button';


interface IProps {
  countBy?: number;
}

interface IState {
  count: number;
}

class Description extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
  };

  public state: IState = {
    count: 0,
  };

  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  };

  public render() {
    return (
      <div>
        <p>My favorite number is {this.state.count}</p>
        <Button variant="primary" onClick={this.increase}>Increase</Button>
      </div>
    );
  }
}
export default Description;