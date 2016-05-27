var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e){
    if (!this.refs.fieldEmail.state.valid){
      alert("Email required in form, please re-enter email!");
    }
    else {
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value,
      };
      console.log(httpRequestBody);
      this.refs.fieldName.clear();
      this.refs.fieldEmail.clear();
    }
  },

  render: function(){
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="fieldName"/>
            <br />
            <EmailField ref="fieldEmail"/>

            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
