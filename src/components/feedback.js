var React=require('react');
var ReactDOM= require('react-dom');
var connect =require('react-redux').connect;

var Feedback= React.createClass({

	render: function(props){
	    return(<div className='feedback'>{this.props.currentFeedback}</div>);
	}
});



module.exports=Feedback;