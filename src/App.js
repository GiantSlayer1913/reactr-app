import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form.js';

class App extends Component {
  state = {
    fields: {}
  }

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
  }


  render() {

    const title = "Welcome to Reactr App";

    return (
      // <MultiThemeProvider>
        <div className="App">
          <h1>{title}</h1>
          <Form onChange={fields => this.onChange(fields)}/>
            <p>{JSON.stringify(this.state.fields, null, 2)}
            </p>
        </div>
      // </MultiThemeProvider>

      );
    }
  }

export default App;


// --- TEMPLATE Component ----

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
