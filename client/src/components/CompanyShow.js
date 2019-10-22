import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMinusCircle, FaScroll, FaUser, FaIdBadge, FaAddressCard, FaPlus, FaPlusCircle, FaComments, FaCog, FaStopwatch, FaFolder, FaHourglassHalf, FaCalendarDay, FaCalendarAlt, FaUserClock, FaClock, FaMoneyCheckAlt, FaMoneyBillAlt, FaHandHoldingUsd, FaBriefcase, FaDollarSign, FaFolderOpen, FaPrint, FaFileDownload, FaCartPlus } from 'react-icons/fa';
import NavBar from './NavBar'



const BigDiv = styled.div`
#tab2, #tab3, #tab4{
    // display: none;
    }
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
.tabs{
    button{
        background-color: transparent;
        border: none;
    }
    button:hover{
        background-color: transparent;

    }
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
input, textarea{
    background: #E9324105;
    color: white;
border-radius: 3px;
border: .5px solid rgba(0,0,0, 0.2);
padding: 5px;
font-family: helvetica;

}

background: rgb(42, 45, 54);
color: white;

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
    background: rgba(226, 112, 121, 0.15);

}
h1{
    font-family: helvetica;
    font-weight: 200;
  color: #E93241;
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
    color: #E93241;
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
h3{
    color: rgb(122, 122, 122);
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
    background-color: #E93241;
    border-radius: 50px;
    font-size: 10px;
    // height: 40px;
    // width: 80px;
    
  }

button:hover{
    background-color: white;
    color:#E93241;
    cursor:pointer;

}
.printSave{
    text-align: center;

button{
    background-color: white;
    padding: 5px 5px 5px 5px;
    color: #E93241;
    border: inset .5px #c0c0c0;
        
         
}
button:hover{
    color: white;
    background-color: #E93241;
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
    // padding-top: 3px;
}
`
const PlusJobBtns = styled.div`
display: flex;
justify-content: space-around;
text-align: center;
`
const TopPosition = styled.div`
// border: black solid 1px;
margin-left: 75%;
margin-top: -3.7%;
position: relative;
color: rgb(185, 184, 184);
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

const TotalsPosition = styled.div`
// border: solid rgba(182, 182, 182, 0.100) .5px;
margin-top: 5%;
display: flex;
justify-content: space-evenly;
padding-bottom: 20px;

input{
    background: transparent;

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
//     color: #E93241;
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
  background: #E93241;
  color: white;
  width: 65px;
  height: 65px;
  border-radius: 50px;
  font-size: 30px;
  font-weight: 100;
  

cursor: pointer;
border: inset .4px #c0c0c0;

a:visited {
    text-decoration: none;
  }
a:hover{
    color: #462255;

}
:hover{
    background: white;
    color: #E93241;
}
// height: 26.5px;

@media only screen and (max-width: 414px){
    // font-size: 14px;
    // height: 26.5px;

}
`
const EditProfileBtn = styled.button`
background: black;
color: white;
width: 70px;
height: 70px;
border-radius: 50px;
border: inset .4px #c0c0c0;
font-size: 30px;
font-weight: 100;
a{
    text-decoration: none;
    color: white;

}
a:visited {
    text-decoration: none;
  }

:hover{
    background: white;
    color: black;
}
cursor: pointer;

@media only screen and (max-width: 414px){
    // font-size: 14px;
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
font-weight: bold;
color: rgb(185, 184, 184);

   

   
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
td{
font-weight: bold;
}
border: solid rgba(182, 182, 182, 0.100) .5px;
border-radius: 3px;
// box-sizing: content-box;
display: flex;
flex-direction: column;
label{
    font-weight: bold;
    color: rgb(185, 184, 184);
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
    height: 100px;
}
td{
    border-left:.5px solid rgba(0,0,0, 0.2);
// width: 10%;

&:first-of-type {
    border-left: none;
  }
    }

.row{
background-color: #E9324115;   


@media print{
    span{
        display: none;
    }
}
}

.tab3{
    border: solid rgba(182, 182, 182, 0.100) .5px;
}

.lineItems{
    border-top: solid rgba(182, 182, 182, 0.100) .5px;
  align-items: center;

}
.row, .lineItems{
    border: solid rgba(182, 182, 182, 0.100) .5px;

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
    td{
        input{
            // width: 60px !important;
        }
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
    
    // trying to use this to display and hide

    // handleShowTabs = () => {
    //     document.getElementById('#tab1').style.display = 'none';
    //     document.getElementById('#tab2').style.display = 'block';
    //     console.log("This is the handle click event to show tabs");
    // }

    // trying to use this to display and hide as well
    // constructor(props){
    //     super(props)
  
    //     this.state = {}
  
    //     this.tab1 = React.createRef()
    //     this.tab2 = React.createRef()
    // }
    // showTabs() {
    //     this.tab1.current.style.display = "none";
    //     this.tab2.current.style.display = "block";
    //   }
    
 
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

                        <div className="noprint" id='topBtns'>
                            <NameNButtonStyle>
                                <h1>{this.state.company.companyname} Positions </h1>
                            </NameNButtonStyle>

                            <PlusJobBtns>
                                <NewPositionButton onClick={this.handleCreateNewPosition} id="plus">
                                    <FaPlus className='icons' />
                                    {/* +  */}
                                </NewPositionButton>

                                <Link to={`/companys/${this.props.match.params.companyId}/profile`} id="prof" >
                                    <EditProfileBtn >
                                        <FaBriefcase className='icons' />
                                        {/* 🗃                         */}
                                    </EditProfileBtn>
                                </Link>
                            </PlusJobBtns>
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
                                            {/* <Link to={`/companys/${this.props.match.params.companyId}/positions/${position._id}`} onClick={this.handleClick.bind(this, position._id)}> */}
                                            <h3>(Position {index + 1}) </h3>
                                            {/* </Link> */}

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
                                                    <th> <label htmlFor="jobtitle" > <span> <FaUser /> </span>{this.state.company.companyname} Position / ID#: </label> </th>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="jobtitle" placeholder='Position, Req#, JobID'
                                                        value={position.jobtitle}
                                                    />


                                                </LogoStyles>
                                                <TopPosition>

                                                    <th> <label htmlFor="dateapplied" > <span> <FaCalendarDay /> </span>Date Applied:</label></th>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="date" name="dateapplied" value={position.dateapplied}
                                                    /><br />
                                                    <br />
                                                </TopPosition>



                                                <div className="tabs">
                                                  <a href="#tab1"><button id='tabtitle1' >  <h2 >CONTACT</h2></button></a>
                                                  <a href="#tab2"><button id='tabtitle2'>  <h2>JOB</h2></button></a>
                                                  <a href="#tab3"><button id='tabtitle3'> <h2>INTERVIEW</h2></button></a>
                                                  <a href="#tab4"><button id='tabtitle4'>  <h2>RESULTS</h2></button></a>
                                                </div>
                                                <br />
                                                <LineItemsGrid >

                                                    <h1 id='tab1'>Contact Info:</h1>

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
                                                    />                                                <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                </LineItemsGrid>

                                                
                                                <LineItemsGrid >
                                                <br/>
<br/>
<br/>
<br/>
                                                    <h1 id='tab2'>Job Info:</h1>

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
 <br/>
<br/>
<br/>
<br/>
                                                </LineItemsGrid>
                                                <br/>
<br/>
<br/>
<br/>

                                                <LineItemsGrid>
                                                <br/>
<br/>
<br/>
<br/>
                                                    <h1 id='tab3'>Interview Info:</h1>
                                                    <div className="row header">
                                                        <td id="desktop">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview 1</div></td>
                                                        <td id="phone">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview <br /> 1</div></td>

                                                        <td id="desktop">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview 2</div></td>
                                                        <td id="phone">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview <br /> 2</div></td>

                                                        <td id="desktop">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview 3</div></td>
                                                        <td id="phone">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview <br /> 3</div></td>

                                                        {/* <td id="desktop">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview 4</div></td>
                                                        <td id="phone">    <div className='' ><span> <FaBriefcase /> </span> <br /> Interview <br /> 4</div></td> */}

                                                    </div>
                                                    <div className="lineItems">


                                                        <td>
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


                                                        <td>
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


                                                        <td>
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


                                                        {/* <td> 
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
                                                                <br /><br /></td> */}


                                                    </div>
                                                    <label htmlFor="intvwques" >Interview Questions: </label>
                                                    <textarea
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="intvwques" placeholder='Add position and company specific questions here'
                                                        value={position.intvwques}
                                                    > </textarea>
                                                    <label htmlFor="followupmsg" >Follow-Up Message: </label>
                                                    <textarea
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="text" name="followupmsg" placeholder='Follow-Up Message'
                                                        value={position.followupmsg}
                                                    > </textarea> <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                </LineItemsGrid>


                                                <LineItemsGrid>
                                                <br/>
<br/>
<br/>
<br/>
                                                    <h1 id='tab4'>Results:</h1>

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
                                                        type="text" name="tostudy" placeholder='Listing name or URL'
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

                                                {/* <OptionsPosition className='noprint printSave'>
                                                    <Link to={`/companys/${this.props.match.params.companyId}/positions/${position._id}`}
                                                        onClick={this.handleClick.bind(this, position._id)}>
                                                        <button > <span><FaPrint /> <FaFileDownload />  </span><p>Export</p>  </button>
                                                    </Link>

                                                </OptionsPosition> */}

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