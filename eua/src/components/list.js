import React from 'react';

export default class DataList extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    fetch('/api/data')
      .then(res => res.json())
      .then(data => this.setState({data},console.log('data:',data)))
  }
  render(){
    const list = this.state.data.map(data => <li key = {data.id}>{data.firstName}</li>);
    return(
      <div>
        {list}
      </div>
    );
  }
}
