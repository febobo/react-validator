# react-validator
react-validator in your react appliction is so ease

# Preview
![demo](http://g.recordit.co/l8acHx5Dsc.gif)
# Install

`npm install react-validator-ease` or `yarn install react-validator-ease`

# Usege

- link

`const ReactValidator from 'react-valid-ease'`

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
    <div className="container">
      <div className="form-group">
        <label>react-validator</label>
        <textarea className="form-control" value={this.state.code}  />
        {/*   This is where the magic happens     */}
        {this.validator.message('review', this.state.code, 'required|min:20|max:120', false, {min: 'Custom min error'})}
      </div>
      <button className="btn btn-primary" onClick={this.submitForm}>Save example</button>
    </div>
  );
},
```
