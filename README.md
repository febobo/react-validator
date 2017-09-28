# react-validator
react-validator in your react appliction is so ease

### Preview
![demo](http://g.recordit.co/l8acHx5Dsc.gif)

### Install

```
npm install react-validator-ease` or `yarn install react-validator-ease
```

### Usege

- link

```bash
const ReactValidator from 'react-valid-ease'
```

- es5
```js
componentWillMount: function() {
  this.validator = new ReactValidator();
},
```

- es6

```js
constructor() {
  this.validator = new ReactValidator();
}
```

- jsx 

```jsx 
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
```

* The message method have five arguments
  - Field: Name: A unique string
  - Value: Current field value
  - Rules: Rules string, support use pipe separated
  - Custom ClassName: ClassName string, your can custom you errorMessage style
  - Custom Error Message: your can custom you errorMessage text


### Rules 

Examples: `require|min:6|min:12`

|Rule|Description|
|---|---|
|require|must be a valid input|
|email|must be a valid email address|
|max|may not be greater than max characters|
|min|may not be greater than mix characters|
|number|must be a number|
|phone|must be a valid phone number|
|url|must be a valid url|
|accepted|must be a valid Boolean|

