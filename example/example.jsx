var ExampleForm = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentWillMount: function() {
    this.validator = new ReactValidator();
  },

  submitForm: function() {
    if( this.validator.allValid() ){
      alert('You submitted the form and stuff!');
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  },

  setStateFromInput: function(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  },

  render: function() {
    return (
      <div className="container card my-4">
        <div className="card-block">
          <h3>Example Form</h3>

          <div className="form-group">
            <label>email</label>
            <input className="form-control" name="email" value={this.state.email} onChange={this.setStateFromInput} />
            {this.validator.message('email', this.state.email, 'required|email','',{
              required: 'email不能为空',
              email: 'email 格式不正确'
            })}
          </div>
          <div className="form-group">
            <label>required</label>
            <input className="form-control" name="required" value={this.state.require} onChange={this.setStateFromInput} />
            {this.validator.message('required', this.state.required, 'required|max:12|min:6','',{
              default: 'required不能为空',
              min: '不能少于6个字符',
              max: '不能大于12个字符'
            })}
          </div>

          <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<ExampleForm />, document.getElementById('root'));
