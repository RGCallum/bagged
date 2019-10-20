import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const BkgdColors = styled.div`
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;*{
    margin: 0;
}
img{
  border: inset 2px;
}


animation: color-change-5x 30s linear infinite alternate both;

@keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}

`
const CompanyContainer = styled.div`

border: inset #C0C0C0;
background-color: #ffffff70;
width: 50vw;
height: 100vh;
border-radius: 15px;
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;
padding: 10px;
box-shadow: 1px 1px 1px;
`

class Company extends Component {
    state = {
      companys: [],
      newCompany: {
        companyname: '',
        idnumber: '',
        email: '',
        phone: '',
        image: '',
      }
    }
  
    handleChange = (event) => {
      const updatedNewCompany = { ...this.state.newCompany }
  
      updatedNewCompany[event.target.name] = event.target.value
      this.setState({ newCompany: updatedNewCompany })
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
  
      axios.post('/api/companys', this.state.newCompany).then(res => {
        console.log(res.data)
        this.props.history.push(`/companys/${res.data._id}`)
      })
  
    }
  
    getAllCompanys = () => {
      axios.get('/api/companys').then((res) => {
        this.setState({ companys: res.data })
      })
    }
  
    componentDidMount() {
      this.getAllCompanys()
    }
  
    render() {
      return (
        <div>
 
 <BkgdColors>
 <CompanyContainer>
            <h1>Sign-Up to be a featured Positionmaker</h1>
            <br/>
            <h2>   <form onSubmit={this.handleSubmit}>
            <br/>

              <div>
                <label htmlFor="companyname">Company Name: </label>
                <input onChange={this.handleChange} value={this.state.newCompany.companyname} type="text" name="companyname" />
              </div>
              <br/>

              <div>
                <label htmlFor="idnumber">ID Number: </label>
                <input onChange={this.handleChange} value={this.state.newCompany.idnumber} type="idnumber" name="idnumber" />
              </div>
              <br/>

              <div>
                <label htmlFor="email">Email: </label>
                <input onChange={this.handleChange} value={this.state.newCompany.email} type="text" name="email" />
              </div>
              <br/>

              <div>
                <label htmlFor="phone">phone: </label>
                <input onChange={this.handleChange} value={this.state.newCompany.phone} type="text" name="phone" />
              </div>
              <br/>

              <div>
                <label htmlFor="image">Image: </label>
                <input onChange={this.handleChange} value={this.state.newCompany.image} type="text" name="image" />
              </div>
              <br/>

              <div>
                <label htmlFor="positions">Positions: </label>
                <input onChange={this.handleChange} value={this.state.newCompany.positions} type="text" name="positions" />
              </div>
              <br/>
              <button type="submit">Create Company</button>
            </form></h2>
            </CompanyContainer>
            </BkgdColors>
        </div>
      )} }
  export default Company;