import React from 'react';

export default ({message}) => <div style={inlineErrorStyle}>{message}</div>;


export const InlineSuccess = ({message}) => <div style = {inlineSuccessStyle}>{message}</div>

const inlineErrorStyle = {
	minWidth: '200px',
	textAlign: 'center',
	color: 'red',
	backgroundColor: 'pink'
};
const inlineSuccessStyle = {
	minWidth: '200px',
	textAlign: 'center',
	color: 'green',
	backgroundColor: '#00dd00'
};
