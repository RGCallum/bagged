import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMinusCircle, FaScroll, FaIdBadge, FaAddressCard, FaPlusCircle, FaComments, FaCog, FaStopwatch, FaFolder, FaHourglassHalf, FaCalendarDay, FaCalendarAlt, FaUserClock, FaClock, FaMoneyCheckAlt, FaMoneyBillAlt, FaHandHoldingUsd, FaBriefcase, FaDollarSign, FaFolderOpen, FaPrint, FaFileDownload, FaCartPlus } from 'react-icons/fa';
import NavBar from './NavBar'



const BigDiv = styled.div`
input, textarea{
    background: #95236005;
border-radius: 3px;
border: .5px solid rgba(0,0,0, 0.2);
padding: 5px;
font-family: helvetica;

}

@media print
{
    input{
        // border:none;
        background: transparent;
    }
    textarea{
        background: transparent;
    }
}
input:focus, textarea:focus{
    background: rgba(255, 212, 39, 0.2);

}
h1{
    font-family: helvetica;
  color: #952360;
//   text-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
  
  }
`

const Addlogo = styled.div`
.addlogotext{
position: relative;

}
#imgurl{
    width: 99.5%;
    font-style: italic;
    font-weight: 100;
    font-size: 10px;

}
button{
    background: turquoise;
}
h3{
    font-weight: 200;
    color: rgb(60,60,60);
    // text-align: center;
    margin-bottom: 2px;
}
h3:hover{
    color: #952360;
}
`
const PositionsContainerStyle = styled.div`
// box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);


//   display: flex;
//   justify-content: center;
  font-family: helvetica;
  font-size: 10px;
  padding: 20px;
  @media print
  {
  .noprint {display:none;}

  }
h2{
    justify-content: center;
text-align: center;
color: rgb(60, 60, 60);
font-weight: 540;
font-size: 14px;
}
`
const PositionStyles = styled.div`
// border: 1px 1px 5px rgba(0,0,0, 0.4);

font-size: 12px;
font-weight: 200;
  
  font-family: helvetica;
// background-image: url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?size=626&ext=jpg');
background-size: cover;
background-repeat: no-repeat;
.memo{
    padding: 10px;
    // box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
    border: dashed rgb(182, 182, 182) .5px;

}

input::placeholder{
    font-style: italic;
}
.required::after {
    content: "*";
    color: red;
    @media print{    
        display:none;
    }
}
.companyname, .idnumber{
    font-size: 20px;
font-weight: bold;
  }

  button {
    // position: absolute;
    // margin-left: 40vw;
    color: white;
    background-color: red;
    border-radius: 5px;
    font-size: 10px;
    // height: 40px;
    // width: 80px;
    
  }

button:hover{
    background-color: white;
    color:red;
    cursor:pointer;

}
.printSave{
    text-align: center;

button{
    background-color: white;
    padding: 5px 5px 5px 5px;
    color: #952360;
    border: inset .5px #c0c0c0;
        
         
}
button:hover{
    color: white;
    background-color: #952360;
}
p{
    margin-bottom: -2px;
    margin-top: -3px;
}
span, p{
    font-size: 15px;
    font-weight: 100;
}
}

#print-button {
    width: 50px;
    text-decoration: none;
}
#save-button {
    width: 50px;
    text-decoration: none;
}

  input{
    font-size: 13px;
    font-family: helvetica;
    // background: rgba(01, 240, 240, 0.2);
  }
  textarea {
    height: 70%;

  }
  img{
   max-width: 250px;
     
  }
  a{
    text-decoration: none;
    font-size: 10px;
  }



span{
    text-shadow: 1px 1px 1px rgba(0,0,0, 0.4);
    // display: none;
    font-size: 15px;
}

  td {
    // border:1px solid black;
padding: 10px;

    }

@media print{

  @page{
    //   size:landscape;
  }
      height: 93vh;
    .noprint {
        display:none;
        }
        span{
            display:none;
        }
    }
`

const Topbtns = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding-top: 20px;

@media print
{
.noprint {display:none;}
}
@media only screen and (max-width: 414px){
    display: flex;
justify-content: center;
}
.icons{
    padding-top: 3px;
}
`

const TopPosition = styled.div`
// border: black solid 1px;
margin-left: 75%;
margin-top: -3.7%;
position: relative;
@media only screen and (max-width: 414px) {
    margin-top: -13.5%;
    margin-left: 55%;
    margin-bottom: -10px;
    input{
        width: 115px;
        height: 100%;
    }  
}
@media print { 
        input{
            border: none;
        }  

}
z-index: 100;
`
const PeriodPosition = styled.div`
padding-top: 20px;
padding-bottom: 10px;
// border: black solid 1px;
// margin-left: 20%;
// margin-top: 5%;
display: flex;
flex-direction: row;
flex-wrap: no-wrap;
justify-content: center;
text-align: center;
align-content: center;
input{
    width: 35%;
}
@media only screen and (max-width: 414px){
// margin-top: -26%;
margin-left: -5%;

input{
    width: 100px;
    height: 100%;
}

}
@media print { 
    padding-top: 80px;
    input{
        border: none;
        
    } 
    input[type="date"]::-webkit-clear-button{
        display: none;
    }

}
`
const Client1Position = styled.div`
@media only screen and (max-width: 800px) {
    flex-direction: column;
  
}
// border: gray solid 1px;
display: flex;
justify-content: space-evenly;
width: 100%;
input::placeholder{
    font-weight: 100;
    font-size: 10px;
}
tr{
    border-collapse:collapse;
    border:1px solid rgba(0,0,0, 0.2);
    // box-shadow: 1px 1px 4px rgba(0,0,0, 0.4);

    }
    
    td{
    border-left:1px solid rgba(0,0,0, 0.2);
    // box-shadow: 1px 1px 1px rgba(0,0,0, 0.4);

    }
th{
    // border-bottom:1px solid gray;
    // width: 100%;

}
#box{
    // border: gray solid 1px;

}
`
const Client2Position = styled.div`
// border: black solid 1px;
// display: none;
input{
    // display: none;
}

`
const TotalsPosition = styled.div`
// border: solid rgb(182, 182, 182) .5px;
margin-top: 5%;
display: flex;
justify-content: space-evenly;
padding-bottom: 20px;

input{
    background: transparent;

}
input::placeholder{
    font-weight: 100;
    font-size: 10px;
}
@media only screen and (max-width: 414px) {
    input{
        width: 30px;
    }
  textarea{
      width: 100px;
  }
}
@media print{
    padding-top: 80px;
}
`

const CommentsBox = styled.div`

textarea{

}
`


const OptionsPosition = styled.div`
padding-top: 5px;
padding-bottom: 20px;
// border: black solid 1px;
// width: 50%;
text-decoration: none;
display: flex;
justify-content: space-evenly;
text-align: center;

// span{
//     font-size: 30px;
//     color: #952360;
//     font-weight: 200;
// }
// a{
//     color: rgb(28, 125, 147);

//     font-size: 12px;
// }
// a:visited {
//     color: rgb(28, 125, 147);
//   }
  button{
border: inset .5px #c0c0c0;

  }

`
const DletBtn = styled.div`
display: flex;
justify-content: space-evenly;
text-align: center;
padding-top: 20px;
padding-bottom: 10px;
button{
    padding: 10px;

}
`


const BkgdImg = styled.div`
width: 100%;
box-shadow: 1px 1px 10px  rgba(0,0,0, 0.4);
padding: 20px;
margin-left: -20px;
`

const NewPositionButton = styled.button`
  background: rgb(28, 125, 147);
  color: white;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 300;
cursor: pointer;
a:visited {
    text-decoration: none;
  }
a:hover{
    color: #462255;

}
:hover{
    background: white;
    color: rgb(28, 125, 147);
}
height: 26.5px;

@media only screen and (max-width: 414px){
    font-size: 14px;
    height: 26.5px;

}
`
const EditProfileBtn = styled.button`
background: #462255;
color: white;
border-radius: 5px;
font-size: 16px;
font-weight: 300;
a{
    text-decoration: none;
    color: white;

}
a:visited {
    text-decoration: none;
  }

:hover{
    background: white;
    a{
        color: #462255;

    }
}
@media only screen and (max-width: 414px){
    font-size: 14px;
}
`
const PositionBtn = styled.div`
// display: flex;
// justify-content: center;
color: #d090c3;
font-weight: 300;
font-family: helvetica;

button{
  background: #d090c3;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
}
button:hover{
  background: white;
  cursor:pointer;
  color: #d090c3;
  
}

`


const NameNButtonStyle = styled.div`
display: flex;
justify-content: center;

h1{
    font-weight: 500;
}  
  img{
    max-width: 200px;
    max-height: 200px;
        
   }
   font-family: helvetica;
@media only screen and (max-width: 414px){
    font-size: 14px;
}
`
const LogoStyles = styled.div`

.companyinfo{
    margin-left: 5%;
    margin-top: 6%;
    position: absolute;
    padding: 10px;
    // border: solid rgba(0,0,0, 0.2) .5px;
    // background-color: rgba(182, 182, 182, 0.2);
    @media only screen and (max-width: 414px){
        align-items: center;
        margin-left: 0%;
position: relative;
    }
}
font-weight: 200;

   

   
`
const LogoIdDiv = styled.div`
// padding-top: 50px;
// padding-bottom: 20px;

display: flex
justify-content: space-between;
align-content: center;
.positionNum{
    margin-left: 50vw;
    color: rgba(0,0,0, 0.3);
    font-weight: 200;
    
    @media only screen and (max-width: 414px){
        // margin-left: -5%;
        font-size: 9px;
    }
      }
      .positionNum:hover{
        // color: blue;
    }
img{
    width: 10%;
        // z-index: 10;
        position: absolute;
        max-width: 250px;
        // margin-left: 2%;

        margin-top: -5%;
        margin-bottom: 50px;
        @media only screen and (max-width: 414px){
            // margin-left: 0%;
        }
    }
.logo{
        z-index: 10;
        position: absolute;
        margin-left: 65%;

    }
    
`


const LineItemsGrid = styled.div`
border: solid rgb(182, 182, 182) .5px;
border-radius: 3px;
// box-sizing: content-box;
display: flex;
flex-direction: column;
label{
    font-weight: bold;
}

.client2line{
    display: block;
}
#sub1, #sub2{
    background: transparent;
    input{
        border: none;
    }
}
input{
    // width: 100px;
    flex-flow: row wrap;
}
textarea{
    height: 80px;
}
td{
    border-left:.5px solid rgba(0,0,0, 0.2);
// width: 10%;

&:first-of-type {
    border-left: none;
  }
    }

.row{
background-color: rgba(43, 172, 174, 0.1);   
font-weight: 700;
@media print{
    span{
        display: none;
    }
}
}

.lineItems{
    border-top: solid rgb(182, 182, 182) .5px;
  align-items: center;
   
}
.row, .lineItems{
    
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    td{
        width: 100%;
        input{
            margin-left:-5.5px;
            width: 100%;
            text-align: center;

        }
    }
}

input::placeholder{
    font-weight: 100;
    font-size: 10px;
}
align-content: center;
text-align: center;

#subsHead2{
    display:none;
}
#phone{
    display: none;
}
@media only screen and (max-width: 414px) {
    align-content: center;
    text-align: center;
    justify-content: center;
    width: 95vw;
    margin-left: -20px;
    #desktop{
        display:none;
    }
    #phone{
        display: block;
    }
    #subsHead{
        display: none;
    }
    #subsHead2{
        display:block;
    }
    input{
        height: 30px;
    }
//     input:focus{
// position: absolute;
//     }
}
@media print {
    .row, .lineItems {
        input{
            border: none;
        }
    }
}
`

class CompanyShow extends Component {

    state = {
        company: '',
        positions: [],
        newPosition: {
            jobtitle: '',
            dateapplied: '',
            contactname: '',
            contactjob: '',
            contactemail: '',
            contactphone: '',
            joburl: '',
            jobsummary: '',
            jobsalary: '',
            coverletter: '',
            intvwdate1: '',
            intvwtime1: '',
            intvwphone1: '',
            intvwvirtual1: '',
            intvwperson1: '',
            intvwtbnt1: '',
            intvwdate2: '',
            intvwtime2: '',
            intvwphone2: '',
            intvwvirtual2: '',
            intvwperson2: '',
            intvwtbnt2: '',
            intvwdate3: '',
            intvwtime3: '',
            intvwphone3: '',
            intvwvirtual3: '',
            intvwperson3: '',
            intvwtbnt3: '',
            intvwdate4: '',
            intvwtime4: '',
            intvwphone4: '',
            intvwvirtual4: '',
            intvwperson4: '',
            intvwtbnt4: '',
            intvw1: '',
            intvw2: '',
            intvw3: '',
            intvw4: '',
            intvwques: '',
            followupmsg: '',
            gotthebag: '',
            nexttime: '',
            tostudy: '',
            foundon: '',

        }
    }



    componentDidMount() {
        // make an api call to get one single company
        // On the server URL is '/api/companys/:companyId'
        const companyId = this.props.match.params.companyId


        axios.get(`/api/companys/${companyId}`).then(res => {
            console.log(res.data)

            this.setState({
                company: res.data,
                positions: res.data.positions,
            })
        })

    }

    handleCreateNewPosition = () => {
        const companyId = this.props.match.params.companyId
        const payload = {
            name: '',

            //   info: 'Position Description'

        }
        axios.post(`/api/companys/${companyId}/positions`, payload).then(res => {
            const newPosition = res.data
            const newStatePositions = [...this.state.positions, newPosition]
            this.setState({ positions: newStatePositions })
        })
    }

    handleDelete = positionId => {
        axios.delete(`/api/positions/${positionId}`).then(() => {
            const newPositions = [...this.state.positions]
            const filtered = newPositions.filter(position => {
                return position._id !== positionId // ! = =
            })
            this.setState({ positions: filtered })
        })
    }



    handleChange = (event, positionId) => {

        const { value, name } = event.target
        const newPositions = [...this.state.positions]
        const updatedValue = newPositions.map(position => {
            if (position._id === positionId) {
                position[name] = value
            }
            // image change
            if (event.target.files && event.target.files[0]) {
                this.setState({
                    uploadImage: URL.createObjectURL(event.target.files[0])

                });

            }

            return position

        })

        this.setState({ positions: updatedValue })
        this.state = { value: 'intvwperson1' };

    }

    handleUpdate = (positionId) => {
        const positionToUpdate = this.state.positions.find(position => {
            return position._id === positionId
        })
        axios.patch(`/api/positions/${positionId}`, positionToUpdate).then(() => {
            console.log("Updated Position")

        })

    }
    handleSelectChange = (event) => {
        this.setState({
            result: event.target.value
        })
    }

    // Handle click function for the position link
    handleClick = (index) => {
        console.log("This is the handle click event for positionId" + ' ' + index);
    }

    render() {

        return (

            <div>
                <NavBar />
                <BigDiv>

                    <Topbtns>



                        <div className="noprint">
                            <NameNButtonStyle>
                                <h1>{this.state.company.companyname} Positions </h1>
                            </NameNButtonStyle>

                            <NewPositionButton onClick={this.handleCreateNewPosition}>
                                <FaPlusCircle className='icons' /> Add New Position
                            </NewPositionButton>
                            <EditProfileBtn >
                                <Link to={`/companys/${this.props.match.params.companyId}/profile`} >
                                    <FaIdBadge className='icons' /> Company Profile
                                </Link>
                            </EditProfileBtn>
                            {/* <PositionBtn>
                                <Link to={`/companys/${this.props.match.params.companyId}`}>
                                    <button><FaBriefcase className='icons' /> Positions</button>
                                </Link>
                            </PositionBtn> */}
                        </div>

                    </Topbtns>

                    <div>

                        <PositionsContainerStyle>

                            {/* Auto update info for another company */}
                            {/* <div className="noprint">     All updates are auto saved <br /> 
                            </div> */}


                            {this.state.positions.map((position, index) => {

                                const deletePosition = () => {

                                    return this.handleDelete(position._id)


                                }
                                // console.log(position._id)




                                return (

                                    <Addlogo>

                                        <PositionStyles>
                                            <Link to={`/companys/${this.props.match.params.companyId}/positions/${position._id}`}
                                                onClick={this.handleClick.bind(this, position._id)}>
                                                <h3>(Position{index + 1}) </h3>
                                            </Link>

                                            <BkgdImg>


                                                <LogoStyles>
                                                    <LogoIdDiv>

                                                        {/* <a href={position.link} > */}

                                                        {/* another company can add its own logo here */}

                                                        {/* below is for url linked image  */}
                                                        {/* <img src={position.image} alt="Add your logo"  />  */}

                                                        {/* below is for uploaded image  */}
                                                        {/* <img id="target" src={this.state.uploadImage} name='image' alt="Add your logo" />  */}

                                                        {/* below is Callum Enterprise logo */}

                                                        {/* </a> */}

                                                        {/* <div className="positionNum">ID:{position._id}  </div><br /> */}

                                                    </LogoIdDiv>
                                                    <th> <label htmlFor="jobtitle" > <span> <FaBriefcase /> </span>Position: </label> </th>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="jobtitle" placeholder='Position'
                                                        value={position.jobtitle}
                                                    />


                                                </LogoStyles>
                                                <TopPosition>

                                                    <th> <label htmlFor="dateapplied" className='required' > <span> <FaCalendarDay /> </span>Date Applied:</label></th>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="date" name="dateapplied" value={position.dateapplied}
                                                    /><br />
                                                    <br /><br />
                                                </TopPosition>


                                                <br /><br />
                                                <LineItemsGrid className='tab1'>

                                                    <h1>Contact Info:</h1>

                                                    <label htmlFor="contactname" >Contact Name: </label>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="contactname" placeholder='contact Name'
                                                        value={position.contactname}
                                                    />

                                                    <label htmlFor="contactjob" >Contact Position: </label>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="contactjob" placeholder='contact position'
                                                        value={position.contactjob}
                                                    />

                                                    <label htmlFor="contactemail" >Contact Email: </label>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="contactemail" placeholder='contact email'
                                                        value={position.contactemail}
                                                    />

                                                    <label htmlFor="contactphone" >Contact Phone: </label>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="contactphone" placeholder='contact phone'
                                                        value={position.contactphone}
                                                    />
                                                </LineItemsGrid>
                                                <LineItemsGrid className='tab2'>

                                                    <h1>Job Info:</h1>

                                                    <label htmlFor="joburl" >Position URL: </label>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="joburl" placeholder='Position URL'
                                                        value={position.joburl}
                                                    />

                                                    <label htmlFor="jobsummary" >Position Summary: </label>
                                                    <textarea
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="jobsummary" placeholder='Position Summary'
                                                        value={position.jobsummary}
                                                    ></textarea>

                                                    <label htmlFor="jobsalary" >Salary: </label>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="jobsalary" placeholder='Salary'
                                                        value={position.jobsalary}
                                                    />

                                                    <label htmlFor="foundon" >Found On: </label>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="foundon" placeholder='Listing name or URL'
                                                        value={position.foundon}
                                                    />
                                                    <label htmlFor="coverletter" >Cover Letter: </label>
                                                    <textarea
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="coverletter" placeholder='Cover Letter'
                                                        value={position.coverletter}
                                                    > </textarea>
                                                </LineItemsGrid>

                                                <LineItemsGrid className='tab3'>

                                                    <h1>Interview Info:</h1>
                                                    <div className="row header">
                                                        <td id="desktop">    <div className='required' ><span> <FaBriefcase /> </span> <br /> Item/Service</div></td>
                                                        <td id="phone">    <div className='required' ><span> <FaBriefcase /> </span> <br /> Item / <br /> Service</div></td>

                                                        <td>    <div className='required'><span> <FaCartPlus /> </span> <br /> Quantity</div></td>

                                                        <td id="desktop">    <div ><span> <FaScroll /> </span> <br />Description</div></td>
                                                        <td id="phone">    <div ><span> <FaScroll /> </span> <br />Desc- <br /> ription</div></td>

                                                        <td>    <div className='required'><span> <FaDollarSign /> </span><br />Price</div></td>


                                                    </div>
                                                    <div className="lineItems">
                                                        <table>

                                                            <td> <tr> <th><label htmlFor="intvw1" >Interview 1: </label></th></tr>
                                                                <label htmlFor="intvwdate1" >Date: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="date" name="intvwdate1" placeholder='contact Name'
                                                                    value={position.intvwdate1}
                                                                />
                                                                <label htmlFor="intvwtime1" > Time: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="time" name="intvwtime1" placeholder='interview time'
                                                                    value={position.intvwtime1}
                                                                />
                                                                <label htmlFor="intvw1"> <br />
                                                                    Type of Interview:
                                                            <select value={this.state.value}
                                                                        onBlur={() => this.handleUpdate(position._id)}
                                                                        onChange={(event) => this.handleChange(event, position._id)}>
                                                                        <option value={position.intvwphone1}>Phone</option>
                                                                        <option value={position.intvwvirtual1}>Virtual</option>
                                                                        <option value={position.intvwperson1}>In-Person</option>
                                                                        <option value={position.intvwtbnt1}>TBNT</option>
                                                                    </select>
                                                                </label>
                                                                <br /><br />
                                                            </td>
                                                            {/* 
                                                        Phone<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwphone1"
                                                            value={position.intvwphone1}
                                                        />
                                                        Virtual<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwvirtual1"
                                                            value={position.intvwvirtual1}
                                                        />
                                                        In-Person<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwperson1"
                                                            value={position.intvwperson1}
                                                        />
                                                        TBNT (Thanks But No Thanks)<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwtbnt1"
                                                            value={position.intvwtbnt1}
                                                        />
                                                        <br /> */}

                                                            <td> <tr><th> <label htmlFor="intvw2" >Interview 2: </label></th></tr>
                                                                <label htmlFor="intvwdate2" >Date: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="date" name="intvwdate2" placeholder='contact Name'
                                                                    value={position.intvwdate2}
                                                                />
                                                                <label htmlFor="intvwtime2" > Time: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="time" name="intvwtime2" placeholder='interview time'
                                                                    value={position.intvwtime2}
                                                                />

                                                                <label htmlFor="intvw2">
                                                                    <br />
                                                                    Type of Interview:
                                                            <select value={this.state.value}
                                                                        onBlur={() => this.handleUpdate(position._id)}
                                                                        onChange={(event) => this.handleChange(event, position._id)}>
                                                                        <option value={position.intvwphone2}>Phone</option>
                                                                        <option value={position.intvwvirtual2}>Virtual</option>
                                                                        <option value={position.intvwperson2}>In-Person</option>
                                                                        <option value={position.intvwtbnt2}>TBNT</option>
                                                                    </select>
                                                                </label>
                                                                <br /><br /></td>
                                                            {/* Phone<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwphone2"
                                                            value={position.intvwphone2}
                                                        />
                                                        Virtual<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwvirtual2"
                                                            value={position.intvwvirtual2}
                                                        />
                                                        In-Person<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwperson2"
                                                            value={position.intvwperson2}
                                                        />
                                                        TBNT (Thanks But No Thanks)<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwtbnt2"
                                                            value={position.intvwtbnt2}
                                                        />
                                                        <br /> */}

                                                            <td> <tr> <th> <label htmlFor="intvw3" >Interview 3: </label></th></tr>
                                                                <label htmlFor="intvwdate3" >Date: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="date" name="intvwdate3" placeholder='contact Name'
                                                                    value={position.intvwdate3}
                                                                />
                                                                <label htmlFor="intvwtime3" > Time: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="time" name="intvwtime3" placeholder='interview time'
                                                                    value={position.intvwtime3}
                                                                />

                                                                <label htmlFor="intvw3">
                                                                    <br />
                                                                    Type of Interview:
                                                            <select value={this.state.value}
                                                                        onBlur={() => this.handleUpdate(position._id)}
                                                                        onChange={(event) => this.handleChange(event, position._id)}>
                                                                        <option value={position.intvwphone3}>Phone</option>
                                                                        <option value={position.intvwvirtual3}>Virtual</option>
                                                                        <option value={position.intvwperson3}>In-Person</option>
                                                                        <option value={position.intvwtbnt3}>TBNT</option>
                                                                    </select>
                                                                </label>
                                                                <br /><br /></td>
                                                            {/* Phone<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwphone3"
                                                            value={position.intvwphone3}
                                                        />
                                                        Virtual<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwvirtual3"
                                                            value={position.intvwvirtual3}
                                                        />
                                                        In-Person<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwperson3"
                                                            value={position.intvwperson3}
                                                        />
                                                        TBNT (Thanks But No Thanks)<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwtbnt3"
                                                            value={position.intvwtbnt3}
                                                        />
                                                        <br /> */}

                                                            <td> <tr> <th> <label htmlFor="intvw4" >Interview 4: </label></th></tr>
                                                                <label htmlFor="intvwdate4" >Date: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="date" name="intvwdate4" placeholder='contact Name'
                                                                    value={position.intvwdate4}
                                                                />
                                                                <label htmlFor="intvwtime4" > Time: </label>
                                                                <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="time" name="intvwtime4" placeholder='interview time'
                                                                    value={position.intvwtime4}
                                                                />
                                                                <label htmlFor="intvw4">
                                                                    <br />
                                                                    Type of Interview:
                                                            <select value={this.state.value}
                                                                        onBlur={() => this.handleUpdate(position._id)}
                                                                        onChange={(event) => this.handleChange(event, position._id)}>
                                                                        <option value={position.intvwphone4}>Phone</option>
                                                                        <option value={position.intvwvirtual4}>Virtual</option>
                                                                        <option value={position.intvwperson4}>In-Person</option>
                                                                        <option value={position.intvwtbnt4}>TBNT</option>
                                                                    </select>
                                                                </label>
                                                                <br /><br /></td>
                                                            {/* Phone<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwphone4"
                                                            value={position.intvwphone4}
                                                        />
                                                        Virtual<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwvirtual4"
                                                            value={position.intvwvirtual4}
                                                        />
                                                        In-Person<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwperson4"
                                                            value={position.intvwperson4}
                                                        />
                                                        TBNT (Thanks But No Thanks)<input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="intvwtbnt4"
                                                            value={position.intvwtbnt4}
                                                        /> */}


                                                        </table>
                                                    </div>
                                                    <label htmlFor="intvwques" >Interview Questions: </label>
                                                    <textarea
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="intvwques" placeholder='Interview Questions'
                                                        value={position.intvwques}
                                                    > </textarea>
                                                    <label htmlFor="followupmsg" >Follow-Up Message: </label>
                                                    <textarea
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="followupmsg" placeholder='Follow-Up Message'
                                                        value={position.followupmsg}
                                                    > </textarea>
                                                </LineItemsGrid>

                                                <LineItemsGrid className='tab4'>

                                                    <h1>Results:</h1>

                                                    <table>
                                                        <select value={this.state.value}
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}>
                                                            <option value={position.gotthebag}>Secured the Bag💰</option>
                                                            <option value={position.intvwvirtual2}>Better Luck Next Time🧗🏽‍♀</option>
                                                        </select>
                                                        <br />
                                                        <br />
                                                        {/* Secured the Bag  <span>💰</span> <input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="gotthebag"
                                                            value={position.gotthebag}
                                                        />
                                                        Better Luck Next Time  <span>🧗🏽‍♀️</span><input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="checkbox" name="nexttime"
                                                            value={position.nexttime}
                                                        /> */}
                                                    </table>
                                                    <label htmlFor="tostudy" >Need to Study: </label>
                                                    <textarea
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="tostudy" placeholder='Need to Study'
                                                        value={position.tostudy}
                                                    > </textarea>
                                                </LineItemsGrid>

                                                <TotalsPosition>
                                                    <CommentsBox>
                                                        {/* <th>   <label htmlFor="comments"><span><FaComments /></span> Notes </label></th>
                                                        <textarea
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="text" name="comments" value={position.comments} placeholder=''></textarea> */}
                                                    </CommentsBox>
                                                </TotalsPosition>

                                                <OptionsPosition className='noprint printSave'>
                                                    <Link to={`/companys/${this.props.match.params.companyId}/positions/${position._id}`}
                                                        onClick={this.handleClick.bind(this, position._id)}>
                                                        <button > <span><FaPrint /> <FaFileDownload />  </span><p>Export</p>  </button>
                                                    </Link>

                                                </OptionsPosition>

                                                <DletBtn>
                                                    <button className='noprint dlet' onClick={e =>
                                                        window.confirm("Are you sure you want to delete this position? There's no going back from here!") &&
                                                        deletePosition(e)}><FaMinusCircle /> Delete Record</button>
                                                </DletBtn><br />
                                            </BkgdImg>


                                        </PositionStyles> <br /><br />
                                    </Addlogo>

                                )

                            })}
                        </PositionsContainerStyle>
                    </div>
                </BigDiv>

            </div>
        )
    }
}

export default CompanyShow;