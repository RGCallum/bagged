import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaFilePositionDollar, FaFolder, FaPlusCircle} from 'react-icons/fa';
import NavBar from './NavBar'


const BkgdColors = styled.div`


*{
  margin: 0;
}
font-size: 12px;
color: white;
display: flex ;
justify-content: center ;
font-family: helvetica;
// background-image: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');

background-color: white;
background-size: cover;
width: 100vw;
margin-left: -10px;
margin-top: 0px;
padding-top: 20px;
height: 100%;

form{
  justify-content: center;
  padding-bottom: 10px;
  box-shadow: 1px 1px 5px rgba(28, 147, 145, 0.4);
  background-color:  rgba(255,255,255,0.95);
  text-align: center;  
  #empText{
    color: rgb(43, 172, 174);  
      font-size: 18px;
    
  }
}
input{
  background: rgba(151, 240, 240, 0.2);
  border:.5px solid rgba(0,0,0, 0.2);
border-radius: 2px;
padding: 5px;
width: 100%;

}
input:focus, textarea:focus{
  background: rgba(255, 212, 39, 0.2);

}
.required:after {
  content: "*";
  color: red;
}

h1{
  color: rgb(43, 172, 174);
// text-shadow: .5px .5px .5px gray;
display: flex;
justify-content: center;
font-weight: 500;
}
span{
  color: white;
  background-color: rgba(28, 147, 145, 0.5); 
  padding: 5px 9px 5px 9px;
  border-radius: 50px;
}

h3{
  color: rgb(60, 60, 60);
  text-align: left;
font-weight: 540;
}
h2{
  color: rgb(60, 60, 60);
  font-weight: 540;
font-size: 14px;
text-align: center;
}
label{
  font-size: 12px;
  color: rgb(60, 60, 60);
font-weight: 400;
}

a{
  // margin-left: 10%;
  text-decoration: none;
  color: rgb(28, 147, 145);
  font-size: 12px;

}
 a:hover{
  color: blue;
  h3{
    color: blue;
  }
}
a:visited{
}

button{
background: #6A7FDB;
color: white;
border-radius: 5px;
font-size: 16px;
font-weight: 300;
cursor: pointer;

}
button:hover{
  background: white;
  
      color: #6A7FDB;
  
}
.addemp{
  // background-color: rgba(255,255,255,0.95);
padding-left: 10px;
padding-right: 20px;


color: black;
text-shadow: none;
h2, h3{
  text-align: center;
}
}

.overlay{
  // background-color:  rgba(255,255,255,0.95);
  // border-top: inset #C0C0C0 .5px;
  // width: 40vw;


}

@media only screen and (max-width: 414px){
  form{
    // padding-bottom: 100px;
  
  }
}
.icons{
  padding-top: 3px;
}
#linkNum{
  display: flex;
  flex-direction: row;
}
`
const CompanyContainer = styled.div`
background-color:  white;
border-bottom: inset #C0C0C0 .5px;
// border-radius: 5px;
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
align-items: left ;
padding: 10px;
color: black;
text-shadow: none;
font-size: 15px;
#link{
  // margin-left: 35%;

}

`


const CompanyOutline = styled.div`
box-shadow: 1px 1px 5px rgba(28, 147, 145, 0.4);
// border: solid black .5px;

`


class Company extends Component {
  state = {
    companys: [],
    newCompany: {
      index: '',

      companyname: '',
      idnumber: '',
      email: '',
      phone: '',
      
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
      
      <div >
        <NavBar />
        <BkgdColors>
          <div className="overlay">
            <br/>
            <h1>Tender Directory</h1>
          <h2>Click on a payee name to view their profile. <br/>
          Click on < FaFilePositionDollar/>Positions to view the payee's positions. </h2>
            {/* <a href="https://tenderfree.herokuapp.com/companys"><button>Click here for Free Editable version</button></a>    */}

<br/>
<CompanyOutline>

          {this.state.companys.map((company, index) => ( 
           
           
            <div key={company._id}>

              <CompanyContainer>
             
              {/* <h5> ID: {company.idnumber}</h5>  */}

                <Link id="linkNum" to={`/companys/${company._id}/profile`}> 
                <span>{index + 1}</span>&#160;&#160; <h3>{company.companyname} </h3>
                
                </Link> 
                <Link id="link" to={`/companys/${company._id}`}> 
          {/* 📂 */}
          &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; < FaFilePositionDollar/>Positions</Link>
                {/* <h5> {company.email}</h5> 
                <h5> {company.phone}</h5>  */}
              </CompanyContainer>

            </div>
            
          ))} 
</CompanyOutline>

<br/><br/>

          <form onSubmit={this.handleSubmit} className='addemp' id='companyname'>
        <br/>  <h2 id='empText'>Add New Payees</h2> 

<h3> 👩🏾‍🦱 👨🏽‍🦳 👩🏾‍🦳 🧔🏾 👱🏽‍♀️ 👨🏾‍ 👵🏾  👨🏿‍🦱 👨🏼‍ 👩🏾 👴🏾 👩🏻</h3>         
 <h3>To add a new payee enter necessary info <br/> in the form below 
  then click the <FaPlusCircle className='icons'/>Add Payee button.</h3>
 <br/> 
            <div >
           <th>  <label className='required' htmlFor="companyname" >Payee Name: </label></th> 
              <input onChange={this.handleChange} value={this.state.newCompany.companyname} type="text" name="companyname"  required='true'/>
            </div>
            <div>
             <th> <label htmlFor="idnumber">ID Number: </label> </th>
              <input onChange={this.handleChange} value={this.state.newCompany.idnumber} type="idnumber" name="idnumber" />
            </div>
            <div>
             <th> <label htmlFor="email">Email: </label> </th>
              <input onChange={this.handleChange} value={this.state.newCompany.email} type="text" name="email" />
            </div>
            <div>
             <th> <label htmlFor="phone">Phone: </label> </th>
              <input onChange={this.handleChange} value={this.state.newCompany.phone} type="text" name="phone" />
            </div>
            <br/>
            {/* <div>
              <label htmlFor="positions">Positions: </label>
              <input onChange={this.handleChange} value={this.state.newCompany.positions} type="text" name="positions" />
            </div> */}
            <button type="submit"><FaPlusCircle className='icons'/> Add Payee</button>
          </form>
          </div>
        </BkgdColors>
      </div>
    )
  }

}

export default Company;