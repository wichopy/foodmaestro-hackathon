import React, { Component } from 'react';
import { Table } from 'antd'
import './App.css';

class App extends Component {
  state = {
    scoredFoods: [],
  }
  componentDidMount() {
    fetch('/scores').then(res => res.json()).then(res => {

      this.setState({ scoredFoods: res })
    })
  }
  render() {
    return (
      <div className="App">
        <Table
          columns={[{
            title: 'Food',
            dataIndex: 'ProductName',
          }, {
            title: 'Score',
            dataIndex: 'score',
            sorter: (a, b) => a.score - b.score,
          }]}
          dataSource={this.state.scoredFoods}
          pagination={false}
        />
      </div>
    );
  }
}

export default App;
