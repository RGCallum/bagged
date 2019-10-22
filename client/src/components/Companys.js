import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBriefcase, FaFolder, FaPlus, FaAddressCard } from 'react-icons/fa';
import NavBar from './NavBar'


const BigDiv = styled.div`
*{
  
  // color: white;
}
.tabs{
  h2{
  font-weight: bold;
  font-family: helvetica;
  // font-weight: 200;
color: #E93241;
  }
  h2:hover{
      color: white;
  }
  display: flex;
flex-direction: row;
justify-content: space-evenly;
}
`

const BkgdColors = styled.div`
*{
  margin: 0;
  color: white;
}

font-size: 12px;
display: flex ;
justify-content: center ;
font-family: helvetica;
background: rgb(42, 45, 54);
width: 100vw;
margin-left: -10px;
margin-top: 0px;
padding-top: 40px;
height: 100%;

.tabs{
  h2{
  font-weight: bold;
  font-family: helvetica;
  // font-weight: 200;
color: #E93241;
  }
  h2:hover{
      color: white;
  }
  display: flex;
flex-direction: row;
justify-content: space-evenly;
}

form{
  justify-content: center;
  padding-bottom: 10px;
  box-shadow: 1px 1px 5px #E9324197;
  // background-color:  rgba(255,255,255,0.95);
  text-align: center;  
  #empText{
    color: #E93241;  
      font-size: 18px;
    
  }
}
input{
  background: #E9324105;
  border:.5px solid rgba(0,0,0, 0.2);
border-radius: 2px;
padding: 5px;
width: 100%;

}
input:focus, textarea:focus{
  background: rgba(226, 112, 121, 0.15);

}
.required:after {
  content: "*";
  color: red;
}

h1{
  color: #E93241;
// text-shadow: .5px .5px .5px gray;
display: flex;
justify-content: center;
font-weight: 500;
}
span{
  color: white;
  background-color: #E9324190; 
  padding: 5px 9px 5px 9px;
  border-radius: 50px;
}

h3{
  color: white;
  text-align: left;
font-weight: 100;
}
h2{
  color: rgb(122, 122, 122);
  font-weight: 100;
font-size: 14px;
text-align: center;
}
label{
  font-size: 12px;
  color: rgb(122, 122, 122);
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
  background: #E93241;
  color: white;
  width: 65px;
  height: 65px;
  border-radius: 50px;
  font-size: 30px;
  font-weight: 100;
  border: inset .4px #c0c0c0;

}
button:hover{
background: white;
cursor:pointer;
color: #E93241;

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


@media only screen and (max-width: 414px){
  form{
    // padding-bottom: 100px;
  
  }
}
// .icons{
//   padding-top: 3px;
// }
#linkNum{
  display: flex;
  flex-direction: row;
}
`
const CompanyContainer = styled.div`
// background-color:  white;
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
box-shadow: 1px 1px 5px #E9324197;
// border: solid black .5px;

`


class Company extends Component {
  state = {
    companys: [],
    newCompany: {
      index: '',
      companyname: '',
      website: '',
      careerpage: '',
      location: '',
      maincontact: '',
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
      <BigDiv>

        <div >
          <NavBar />
          <BkgdColors>
            {/* <div className="tabs">
              <h2 id='tabtitle1'>COMPANY LIST</h2>
              <h2 id='tabtitle2'>ADD NEW</h2>
            </div> */}
            <div className="overlay">
              <br />
              <h1>Company List</h1>
              <h2>Click on a company name to view their profile. <br />
                Click on < FaAddressCard /> Positions to view the positions you applied for. </h2>
              {/* <a href="https://tenderfree.herokuapp.com/companys"><button>Click here for Free Editable version</button></a>    */}

              <br />
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
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; < FaAddressCard /> Positions</Link>
                      {/* <h5> {company.email}</h5> 
                <h5> {company.phone}</h5>  */}
                    </CompanyContainer>

                  </div>

                ))}
              </CompanyOutline>

              <br /><br />

              <form onSubmit={this.handleSubmit} className='addemp' id='companyname'>
                <br />  <h2 id='empText'>Add New Company</h2>

                <h2>To add a new company enter necessary info <br /> in the form below
  then click the <FaPlus className='icons' /> button.</h2>
                <br />
                <div >
                  <th>  <label className='required' htmlFor="companyname" >Company Name: </label></th>
                  <input onChange={this.handleChange} value={this.state.newCompany.companyname} type="text" name="companyname" required='true' />
                </div>
                <div>
                  <th> <label htmlFor="website">Website Url: </label> </th>
                  <input onChange={this.handleChange} value={this.state.newCompany.website} type="website" name="website" />
                </div>
                <div>
                  <th> <label htmlFor="careerpage">Career Page Url: </label> </th>
                  <input onChange={this.handleChange} value={this.state.newCompany.careerpage} type="careerpage" name="careerpage" />
                </div>
                <div>
                  <th> <label htmlFor="location">Company Location: </label> </th>
                  <input onChange={this.handleChange} value={this.state.newCompany.location} type="location" name="location" />
                </div>
                <div>
                  <th> <label htmlFor="maincontact">Main Contact Name: </label> </th>
                  <input onChange={this.handleChange} value={this.state.newCompany.maincontact} type="maincontact" name="maincontact" />
                </div>



                <div>
                  <th> <label htmlFor="email">Email: </label> </th>
                  <input onChange={this.handleChange} value={this.state.newCompany.email} type="text" name="email" />
                </div>
                <div>
                  <th> <label htmlFor="phone">Phone: </label> </th>
                  <input onChange={this.handleChange} value={this.state.newCompany.phone} type="text" name="phone" />
                </div>
                <br />
                {/* <div>
              <label htmlFor="positions">Positions: </label>
              <input onChange={this.handleChange} value={this.state.newCompany.positions} type="text" name="positions" />
            </div> */}
                <button type="submit"><FaPlus className='icons' id='plusBtn' /></button>
              </form>
            </div>
          </BkgdColors>
        </div>
      </BigDiv>
    )
  }

}

export default Company;