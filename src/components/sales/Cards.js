import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        received: 0,
        returnAmount: 0,
        total: 0
      }
    };
  }

  handleChange = e => {
    let { data } = this.state;

    data[e.target.name] = e.target.value;
    this.setState({ data });

    data.total = this.props.tableItem
      .reduce(
        (red, i) =>
          red +
          (i.quantity * i.sellingPrice -
            (i.discountPercent / 100) * i.quantity * i.sellingPrice),
        0
      )
      .toFixed(2);
    this.setState({ data });
    console.log('totalll', this.state.data.total);

    data.returnAmount = this.state.data.received - this.state.data.total;
    this.setState({ data });
  };
  componentDidMount() {
    let { data } = this.state;
    data.returnAmount = -this.props.tableItem
      .reduce(
        (red, i) =>
          red +
          (i.quantity * i.sellingPrice -
            (i.discountPercent / 100) * i.quantity * i.sellingPrice),
        0
      )
      .toFixed(2);
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <div className="card received">
          <div className="heading">
            Tendered amount
            <div>
              <input
                type="number"
                min="0"
                className="amount"
                name="received"
                value={this.state.data.received}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="card return">
          <div className="heading">Return amount</div>
          <div className="amount">
            {this.state.data.returnAmount.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tableItem: state.tableItem
  };
};

export default connect(
  mapStateToProps,
  null
)(Cards);
