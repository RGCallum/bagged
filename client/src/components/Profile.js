import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Company from './Companys';
import {FaMinusCircle, FaUser, FaCity, FaLink, FaMapMarkerAlt, FaEnvelope, FaMobileAlt, FaAddressCard, FaPlusCircle, FaFolder, FaBriefcase } from 'react-icons/fa';
import NavBar from '../components/NavBar'


const BigDiv = styled.div`
*{
  input, tr, td, textarea{
      font-weight: 100;
  }
  input::placeholder, textarea::placeholder{
      font-weight: 100;
      font-size: 10px;
      font-style: italic;  
      
  }  
}
background: rgb(42, 45, 54);
color: white;
label{
  color: rgb(122, 122, 122);
}

a:visited{
  color: white;
}
a:hover{
  rgb(122, 122, 122)
}

input, textarea{
  background: #E9324105;
  color: white;
border-radius: 3px;
border: .5px solid rgba(0,0,0, 0.2);
padding: 5px;
font-family: helvetica;

}
input:focus, textarea:focus{
  background: rgba(226, 112, 121, 0.15);

}
`
const NameContainer = styled.div`

padding-top: 20px;

h1{
  font-family: helvetica;
font-weight: 500;
color: #E93241;
font-size: 30px;
text-align: center;
}
display:flex;
justify-content: center;
`

const CompanyStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;

  // background: #E9324105;
  input {
    background: #E9324105;

    font-size: 15px;

  }
 
  img{
   max-width: 250px;
       
  }
  font-weight: 200;

`


const CompanysContainerStyle = styled.div`
  // display: flex;
  // justify-content: space-evenly;
  // flex-wrap: wrap;
  // align-content: center;
  // background-color: rgba(232, 232, 232, 0.653); 
  font-family: helvetica;
  font-weight: 200;

`
const Toptext = styled.div`
font-family: helvetica;
// font-size: 10px;
display:flex;
justify-content: center;
text-align: center;
color: rgb(60, 60, 60);
font-weight: 540;
font-size: 14px;

`

const NameNButtonStyle = styled.div`
font-weight: 200;
box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
padding-left:10%;
padding-right:10%;

  font-family: helvetica;
h1{
  font-weight: 500;
}
h3{
  color: #E93241;
  font-weight: 100;
margin-bottom: 5px;
  text-align: left;
  justify-content: center;
}
display:flex;
flex-direction: column;

text-align: center;
justify-content: center;
  button {
    // position: absolute;
    color: white;
    background-color: #E93241;
    border-radius: 50px;
    padding: 10px;

  }
  button:hover{
    background-color: white;
    color:#E93241;
    cursor:pointer;
  
  }
  input{
    background: #E9324105;
    border-radius: 3px;
    border: .5px solid rgba(0,0,0, 0.2);
    padding: 5px;

  }
  label{
    font-size: 12px;
text-align: left;
  }

  
`
const PositionBtn = styled.div`
display: flex;
justify-content: center;
font-weight: 300;
font-family: helvetica;

button{
    color: white;
    background: #E93241;
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  border: inset .5px #c0c0c0;
  font-size: 30px;
  font-weight: 100;
}
button:hover{
  background: white;
  cursor:pointer;
    color: #E93241;

  
}
a{
  
    text-decoration: none;
    // color: white;
}
a:visited{
    color: #d090c3;
}
a:hover{
  color: blue;
}
.icons{
  padding-top: 3px;
}
`

class Profile extends Component {
  state = {
    company: {},
    companyname: '',
    website: '',
    careerpage: '',
    location: '',
    maincontact: '',
    email: '',
    phone: '',
    
  }

  componentDidMount() {
    const companyId = this.props.match.params.companyId
    axios.get(`/api/companys/${companyId}`).then(res => {
      console.log(res.data)
      this.setState({
        company: res.data,
      })
    })
  }

  handleDelete = companyId => {
    if (this.props.match.params.companyId) {
      const companyId = this.props.match.params.companyId;
      console.log(companyId);
      axios.delete(`/api/companys/${companyId}`)
        .then(res => {
          this.setState({ company: res.data.company });
          this.props.history.push(`/companys/`)

        })
    }
  }

  handleChange = (event) => {
    //take it
    const company = { ...this.state.company }
    //change it
    const name = event.target.name
    const value = event.target.value
    company[name] = value
    //put it back
    this.setState({ company })
  }

  handleUpdate = () => {
    const companyId = this.props.match.params.companyId
    const updatedCompany = this.state.company
    console.log(companyId)
    axios.patch(`/api/companys/${companyId}`, updatedCompany)
      .then((res) => {
        console.log(res.data, 'updates')
        this.setState({ company: this.state.company })
      })
      .catch(console.error)
  }

  render() {

    return (
      <BigDiv>
        <div>
        <NavBar />
        
        <NameContainer>
        <br /><h1>
        {this.state.company.companyname}'s Profile</h1>
        </NameContainer>
        <PositionBtn>

          <br />
          <Link to={`/companys/${this.props.match.params.companyId}`}>
       <button><FaAddressCard className='icons'/></button> </Link>
       </PositionBtn>
           
        <Toptext></Toptext>
        <br/>
        <NameNButtonStyle>

          <h3>
            <FaCity/> {this.state.company.companyname}</h3>
          <label htmlFor="companyname" > Update Company: </label>
          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type="text" name="companyname" placeholder='Company Name'
            value={this.state.company.companyname}
          />

          <h3> 
            <FaLink/>
          <a href={this.state.company.website}> {this.state.company.website} </a> </h3>
          <label htmlFor="website"> Update Website Url: </label>
          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' placeholder='URL'
            value={this.state.company.website}
            name="website"
          />

           <h3> 
           <FaLink/>
           <a href='#'> {this.state.company.careerpage} </a></h3>
          <label htmlFor="careerpage"> Update career page Url: </label>
          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' placeholder='URL'
            value={this.state.company.careerpage}
            name="careerpage"
          />

                     <h3> <FaMapMarkerAlt/> {this.state.company.location} </h3>
          <label htmlFor="location"> Update location: </label>
          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' placeholder='location'
            value={this.state.company.location}
            name="location"
          />

<h3> <FaUser/> {this.state.company.maincontact} </h3>
          <label htmlFor="maincontact"> Update Main Contact: </label>
          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' placeholder='main point of contact for company'
            value={this.state.company.maincontact}
            name="maincontact"
          />

          <h3> <FaEnvelope/> {this.state.company.email}</h3>
          <label htmlFor="email"> Update Email: </label>
          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' name="email" placeholder='Company Email'
            value={this.state.company.email}
          />
          <h3><FaMobileAlt/> {this.state.company.phone} </h3>
          <label htmlFor="phone"> Update Phone: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={this.handleChange}
            type='text' name="phone" placeholder='Company Phone'
            value={this.state.company.phone}
          />


          <br />
          <a href={`/companys`}>
            <button className='noprint' onClick={e =>
              window.confirm("Are you sure you want to delete this company? All their positions will be deleted as well!") &&
              this.handleDelete(e)}> <FaMinusCircle/> Delete {this.state.company.companyname} from directory</button>
          </a>
          <br />
        </NameNButtonStyle>

        <div>
          <CompanysContainerStyle>

            <CompanyStyles>
            


            </CompanyStyles>

          </CompanysContainerStyle>
        </div>

        
      </div>
      </BigDiv>
    )
  }
}
export default Profile
