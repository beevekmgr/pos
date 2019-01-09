import { combineReducers } from 'redux';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import supplierReducer from './supplierReducer';
import itemReducer from './itemReducer';
import salesReducer from './salesReducer';
import selectReducer from './selectReducer';
import addQuantity from './addQuantity';
import tableReducer from './tableReducer';
import textRender from './textRender';


const rootReducer = combineReducers({
	user: userReducer,
	category: categoryReducer,
	supplier: supplierReducer,
	item: itemReducer,
	selectedItem : selectReducer,
	salesItem : salesReducer,
	quantity : addQuantity,
	tableItem : tableReducer,
	textToRender : textRender,
	
});

export default rootReducer;
