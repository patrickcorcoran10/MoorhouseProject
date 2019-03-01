import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container } from 'reactstrap';
// import Col from '../../components/Col';
import Row from '../../components/Row';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            inputs: []
        };
    }
    componentWillMount() {
        console.log("we are mounted on the Dashboard");
        axios.get('/api/dashboard')
        .then(res => {
            console.log(res)
            this.setState({ inputs: res.data })
        })
    };
    // verify = id => {
    //     // event.preventDefault();
    //     let deleteId = id.target.value
    //     alert("You are deleting a record ", deleteId);
        
    // }
    onDelete = event => {
        event.preventDefault();
        var deleteId = event.target.value;
        axios.delete('/api/delete' + deleteId)
        .then((response) => {
            this.componentWillMount();
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
        <Jumbotron fluid>
            <Container fluid>
                <h4>Current Clients</h4>
            </Container>
        </Jumbotron>
        
        <Row>
        
        {this.state.inputs.map((data, index) => (
           
            
            
            <div className='col-md-6' key={data.id}>
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
        </Row>
      </div>
    )
  }
}
