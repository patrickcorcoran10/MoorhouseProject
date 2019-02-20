import React, { Component } from 'react';
import axios from 'axios';

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state={
      inputs: {}
    };
  };

  componentWillMount() {
    console.log('we are mounted on the view page for record number: ', this.props.id);
    axios.get('/api/view' + this.props.id)
    .then(res => {
      let selected = res.data[0]
      console.log(selected);
      this.setState({
        inputs: selected
      })
    })
  };

  render() {
    const style = {
      container: {
        paddingTop: '80px'
      }
    };
    return (
      <div style={style.container} className='container'>
        <div className='row'>
          <div className='col-md-3'>

          </div>
          <div className='col-md-6'>
            <p>View Page</p>
          </div>
          <div className='col-md-3'>
          </div>
        </div>
      </div>
    )
  }
}
