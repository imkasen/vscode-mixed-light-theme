import React, { useState } from 'react';

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Functional Component</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={this.toggleVisibility}>Toggle Visibility</button>
        {this.state.visible && <p>This is visible</p>}
      </div>
    );
  }
}

const ListRendering = () => {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>List Rendering</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ConditionalRendering = () => {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FunctionalComponent />
      <ClassComponent />
      <ListRendering />
      <ConditionalRendering />
    </div>
  );
};

export default App;
