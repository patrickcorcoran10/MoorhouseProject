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
            <div className='col-md-4'>
            </div>
            <div className='col-md-4'>
                <h6>Companies in the Database</h6>
            </div>
            <div className='col-md-4'>
            </div>
        </div>
        {this.state.inputs.map((data, index) => (
        <div className="row" key={data.id}>
            <div className="col-md-6">
                <div className="card" >
                    <div className="card-header">
                        <strong>{data.companyName}</strong>
                    </div>
                    <div className="card-body">
                        <p className="card-title">{data.clientName}</p>
                        <p className="card-text">{data.clientEmail}</p>
                        <button value={data.id} onClick={this.onUpdate}>Company View</button>
                        <button value={data.id} onClick={this.openModal}>Delete</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
        ))}
      </div>
    )
  }
}
