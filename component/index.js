import React from 'react';
import './index.css';

export default class Vega extends React.Component {

  render() {
      return (
        <div className="Vega">
          {JSON.stringify(this.props.data)}
        </div>
      );
  }

}
