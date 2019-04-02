import React, { Component } from 'react';
import SearchResults from './SearchResult';
import { connect } from 'react-redux';
import { getItem, selectItem, addQuantity, tableRender, textClear } from '../../actions/index';


class NewFile extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                product: '',
                quantity: '',
                focus: false,
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.focusOn = this.focusOn.bind(this);
        this.blurOn = this.blurOn.bind(this);
    }

    handleChange = (e) => {
        let { data } = this.state;
        data[e.target.name] = e.target.value;
        this.setState({ data });
        // console.log(this.props.salesItem);

        if (e.target.name === 'quantity') {
            this.props.addQuantity(this.state.data.quantity);
            // console.log(this.props.quantity)
        }

    };
    changeProduct = () => {
        console.log('yeaaaaaaaaaaaaaaaaaaaaa', this.props.textToRender);
        this.setState((prevState) => ({
            ...prevState, data: { ...prevState.data, product: this.props.textToRender }
        }));
    }
    focusOn = () => {
        // console.log('focus')
        this.setState((prevState) => ({
            ...prevState, data: { ...prevState.data, focus: true }
        }));
    }
    blurOn = () => {
        // console.log('blur');
        setTimeout(() => {
            this.setState((prevState) => ({
                ...prevState, data: { ...prevState.data, focus: false }
            }));
        }, 94);

    }
    onSubmit = () => {
        //  if(!this.props.selectedItem.data){
        // 	 alert('First enter the product you bitchass');
        //  }
        let item1 = Object.assign(...this.props.selectedItem.data);
        let items = Object.assign(item1, this.props.quantity);
        this.props.tableRender(items);
        this.setState((prevState) => ({
            ...prevState, data: { ...prevState.data, focus: false }
        }));
        this.setState((prevState) => ({
            ...prevState, data: { ...prevState.data, quantity: '' }
        }));
        this.setState((prevState) => ({
            ...prevState, data: { ...prevState.data, product: '' }
        }));
        this.props.textClear();
        this.changeProduct();
        console.log('cleared ornot', this.props.textToRender)
        // console.log(this.props.tableItem);

    }
    componentDidMount() {
        this.props.getItem();

    }


    render() {

        return (
            <div style={{ padding: '10px' }}>
                <div>
                    <div>

                        <input
                            type="text"
                            name="product"
                            id="product"
                            placeholder="Please input the item to sale or the barcode"
                            onChange={this.handleChange}
                            onFocus={this.focusOn}
                            onBlur={this.blurOn}
                            value={this.state.data.product}
                        />

                        <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            placeholder="QTY"
                            onChange={this.handleChange}
                            value={this.state.data.quantity}
                        />
                        {this.state.data.focus && <SearchResults result={this.props.salesItem.message} changeProduct={this.changeProduct} />}
                        <button type="submit" className="button btn btn-primary" onClick={this.onSubmit}>
                            SALE
						</button>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        salesItem: state.salesItem,
        selectedItem: state.selectedItem,
        quantity: state.quantity,
        tableItem: state.tableItem,
        textToRender: state.textToRender,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getItem: () => dispatch(getItem()),
        selectItem: (data) => dispatch(selectItem(data)),
        addQuantity: (data) => dispatch(addQuantity(data)),
        tableRender: (data) => dispatch(tableRender(data)),
        textClear: () => dispatch(textClear()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFile);