import React from 'react';
import { connect } from 'react-redux';
import { selectItem, textRender } from '../../actions/index';



class Result extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    async handleClick(id) {


        //   console.log('clickeedddd');
        //   console.log(id)

        const newArr = [...this.props.salesItem.message]
        let selectedItem = await newArr.filter(function (resp) {
            return (resp._id === id);

        })
        this.props.selectItem(selectedItem);
        console.log(this.props.selectedItem.data);
        this.props.selectedItem.data.map((mapp, i) => this.props.textRender(mapp.name))
        this.props.changeProduct();

    }


    render() {

        return (
            <div>
                <table>
                <ul className="list-group">
                    <li className="list-group-item">
                        <img
                            className="img-circle media-object pull-left"
                            alt=""
                            src="https://www.ketoconnect.net/wp-content/uploads/2018/01/keto-chocolate-bar-broke.jpg"
                            width="50"
                            height="50"
                        />
                        <div className="media-body" onClick={() => this.handleClick(this.props.product._id)}>
                            {/* {console.log('helllooooooooooo', this.props.product)} */}
                            <strong>{this.props.product.name}</strong>
                            <p>{this.props.product.description}</p>
                            <button className="btn btn-primary pull-right" style={{ float: "right" }} >{this.props.product.sellingPrice}</button>
                        </div>
                    </li>
                    <hr />
                </ul>
                </table>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        salesItem: state.salesItem,
        selectedItem: state.selectedItem,
        textToRender: state.textToRender,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem: (data) => dispatch(selectItem(data)),
        textRender: (data) => dispatch(textRender(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Result);