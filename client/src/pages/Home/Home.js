import React, { Component } from 'react';
import axios from 'axios';
// import Card from '../components/Card/Card';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            inputs: []
        };
    }
    componentDidMount() {
        console.log("we are mounted on the Dashboard");
        axios.get('/api/dashboard')
        .then(res => {
            console.log(res)
            this.setState({ inputs: res.data })
        })
    };
    verify = id => {
        // event.preventDefault();
        let deleteId = id.target.value
        alert("You are deleting a record ", deleteId);
        
    }
    onDelete = event => {
        event.preventDefault();
        var deleteId = event.target.value;
        axios.delete('/api/delete' + deleteId)
        .then((response) => {
            this.componentDidMount();
        })
        .catch(function (error) {
            console.log(error)
        });
        alert("You have deleted a record")
    };
    onUpdate = id => {
        var idChosen = id.target.value;
        console.log(idChosen);
        this.props.history.push('/view');
        this.props.click(idChosen);
    };

  render() {
    const style= {
        container: {
            height: '650px',
            color: 'orange',
            width: '950px',
            paddingLeft: '40px',
            align: 'center',
            paddingTop: '80px',
            paddingBottom: '180px'
        }
    }
    return (
      <div style={style.container}>
        <div className='row'>
            <div className='col-md-3'>
            </div>
            <div className='col-md-6'>
                <h3>Current Clients</h3>
            </div>
            <div className='col-md-3'>
            </div>
        </div>
        <div className='row'>
        
        {this.state.inputs.map((data, index) => (
            
            <div className="col-md-5" key={data.id}>
                <div className="card" >
                    <div className="card-header">
                        <strong>{data.companyName}</strong>
                    </div>
                    <div className="card-body">
                        <p className="card-title">{data.clientName}</p>
                        <p className="card-text">{data.clientEmail}</p>
                        <button value={data.id} onClick={this.onUpdate}>Company View</button>
                        <button value={data.id} onClick={this.onDelete}>Delete</button>
                    </div>
                </div>
                <hr />
            </div>
        ))}
        <div className='col-md-2'>

        </div>
        </div>
      </div>
    )
  }
}
