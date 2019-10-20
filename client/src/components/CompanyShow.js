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
margin-top: 8%;
position: relative;
@media only screen and (max-width: 414px) {
    margin-top: -27%;
    margin-left: 55%;
    margin-bottom: -10px;
    input{
        width: 115px;
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
const SubtotalBox = styled.div`
border:.5px solid rgba(0,0,0, 0.2);
border-radius: 2px;
padding: 5px;

tr{
    // display: flex;
    
    align-items: center;

}
input{
    border: none;
    float: right; 
    text-align: right;
    align-content: right;
    
}
input:focus, textarea:focus{
    background: transparent;

}
label{
    font-weight: 600;

}
.subLineBrdr{
    border:.5px solid rgba(0,0,0, 0.2);
    

}
#subBtn{
    // float: left;
    background-color: #b4bfd36d;
    border:.5px solid rgba(0,0,0, 0.2);
  

}
@media only screen and (max-width: 414px) {
    input{
        width: 100px;
        #subBtn{
            width: 100px;
        }
    }
    
}
`
const CommentsBox = styled.div`

textarea{

}
`

const TotalDue = styled.div`
border-top: solid rgb(182, 182, 182) .5px;

color: rgb(28, 147, 145);
font-weight: bold;
// padding-bottom: 50px;

input{
    // background-color: rgba(01, 255, 20, 0.2);
    color: rgb(28, 147, 145);
    font-weight: bold;
    width: 132.5px;

}
@media only screen and (max-width: 414px) {
    input{
        width: 95px;    }
  
}
@media print{
    color: black;
input{
        color: black;
        // width: 115%;
}
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
td{
    border-left:.5px solid rgba(0,0,0, 0.2);
// width: 10%;

&:first-of-type {
    border-left: none;
  }
    }

.row{
    
    // display: flex;
    // justify-content: space-around;
    // flex-direction: row;
    // align-items: center;
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
const DisplayPosition = styled.div``

class CompanyShow extends Component {

    state = {
        company: '',
        positions: [],
        newPosition: {
            date: '',
            payperiodstart: '',
            payperiodend: '',
            name: '',
            image: '',
            namefee: '',
            otherfee: '',
            idnumber: '',
            client: '',
            frequency: '',
            rate: '',
            subtotal: '',
            arisefee: '',
            callumfee: '',
            comments: '',
            totaldue: '',
            result2: '',
            client2: '',
            frequency2: '',
            rate2: '',
            uploadImage: '',
            math: '',
            sub1: '',
            sub2: '',
            showSubs: '',
            callumfeeResults: '',
            showTotalCalc: '',
            viewSubs: '',
            total: '',
            // id: 'idnumber'
            // addLine: true,
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



//     function myFunction() {
//         var x = document.getElementById("displayPosition");
//         if (x.style.display === "none") {
//           x.style.display = "block";
//         } else {
//           x.style.display = "none";
//         }
//       }
// 

    render() {

        return (

            <div>
                <NavBar />
                <BigDiv>

                    <Topbtns>



                        <div className="noprint">
                            <NameNButtonStyle>
                                <h1>{this.state.company.companyname}'s Positions </h1>
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
<h2>1. Fill out all fields as needed. <br/>
2. Click the export button to print or download position info. <br/></h2>


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
                                        <h3>(Position{index +1}) </h3>
</Link>
               
                                            <BkgdImg>

                                            <Link to={`/companys/${this.props.match.params.companyId}/positions/${position._id}`}
                                                            onClick={this.handleClick.bind(this, position._id, index)}>
                                                            <div className="printSave"><button > <span><FaPrint /> <FaFileDownload />  </span><p>Export</p>  </button></div>
                                                        </Link>
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

                                                    <div className="companyinfo">
                                                        <label htmlFor="companyname" className='companyname'>
                                                            {/* <span> 👤 </span> */}
                                                            {this.state.company.companyname} </label> <br />
                                                        <label htmlFor="idnumber" className='idnumber'>
                                                            {/* <span> 💳 </span> */}
                                                            ID: {this.state.company.idnumber} </label><br />
                                                        <label htmlFor="email" className='email'>
                                                            {/* <span> ✉️ </span> */}
                                                            {this.state.company.email} </label><br />
                                                        <label htmlFor="phone" className='phone'>
                                                            {/* <span>📱</span>  */}
                                                            {this.state.company.phone} </label>
                                                    </div>

                                                </LogoStyles>
                                                <TopPosition>

                                                    <th> <label htmlFor="date" className='required' > <span> <FaCalendarDay /> </span>Today's Date:</label></th>
                                                    <input
                                                        onBlur={() => this.handleUpdate(position._id)}
                                                        onChange={(event) => this.handleChange(event, position._id)}
                                                        type="date" name="date" value={position.date}
                                                    /><br />
                                                    <br /><br />
                                                </TopPosition>
                                                <PeriodPosition>
                                                    <table>
                                                        <th>  <label htmlFor="payperiod" className='required'><span><FaCalendarAlt /> </span>Pay Period:</label></th>
                                                        <tr>  <label htmlFor="payperiodstart"> Start:</label>
                                                            <input
                                                                onBlur={() => this.handleUpdate(position._id)}
                                                                onChange={(event) => this.handleChange(event, position._id)}
                                                                type="date" name="payperiodstart" value={position.payperiodstart}
                                                            />
                                                            <label htmlFor="payperiodend"> End:</label>
                                                            <input
                                                                onBlur={() => this.handleUpdate(position._id)}
                                                                onChange={(event) => this.handleChange(event, position._id)}
                                                                type="date" name="payperiodend" value={position.payperiodend}
                                                            /></tr><br />
                                                    </table>
                                                </PeriodPosition>

                                                <br /><br />
                                                <LineItemsGrid>



                                                    <div className="row header">
                                                    <td id="desktop">    <div className='required' ><span> <FaBriefcase /> </span> <br /> Item/Service</div></td>
                                                        <td id="phone">    <div className='required' ><span> <FaBriefcase /> </span> <br /> Item / <br/> Service</div></td>

                                                        <td>    <div className='required'><span> <FaCartPlus /> </span> <br /> Quantity</div></td>

                                                        <td id="desktop">    <div ><span> <FaScroll /> </span> <br />Description</div></td>
                                                        <td id="phone">    <div ><span> <FaScroll /> </span> <br />Desc- <br/> ription</div></td>
                                                        
                                                        <td>    <div className='required'><span> <FaDollarSign /> </span><br />Price</div></td>
                                                        <td id='subsHead'>    <div  ><span><FaMoneyBillAlt /></span><br />Total</div></td>
                                                        <td id='subsHead2'>    <div  ><span><FaMoneyBillAlt /></span><br />Total</div></td>

                                                    </div>
                                                    <div className="lineItems">
                                                        <td >    <input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="text" name="client" value={position.client} placeholder='Item/Service name'
                                                        /></td>
                                                        <td>    <input id="frequency"
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            // onChange={(event) => this.handleChange(event, position._id, executeMath())}
                                                            type="number" name="frequency" value={position.frequency} placeholder="Quantity/Time Worked"
                                                        /></td>
                                                        <td>      <input
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="text" name="result" value={position.result} placeholder='Product/Interval Type'
                                                        /></td>

                                                        <td>     <input id='rate'
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            // onChange={(event) => this.handleChange(event, position._id, executeMath())}
                                                            type="number" name="rate" value={position.rate} placeholder='Price/Rate of pay 0.00'
                                                        /> </td>
                                                        <td id='sub1'>     <input id='sub1' readOnly

                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            // type="number" name="sub1" value={position.sub1}
                                                            type="text" name="sub1" value={"$" + (position.rate * position.frequency).toFixed(2)}
                                                        /> </td>
                                                    </div>

                                                    {
                                                        // this.state.addLine ?
                                                        <div>


                                                            <div className="lineItems client2line" id='client2line'>
                                                                <td >    <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="text" name="client2" value={position.client2} placeholder='Item/Service name'
                                                                /></td>
                                                                <td>    <input id="frequency2"
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    // onChange={(event) => this.handleChange(event, position._id, executeMath())}
                                                                    type="number" name="frequency2" value={position.frequency2} placeholder="Enter 0 if none"
                                                                /></td>
                                                                <td>      <input
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    type="text" name="result2" value={position.result2} placeholder='Product/Interval Type'
                                                                /></td>
                                                                <td>     <input id="rate2"
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    // onChange={(event) => this.handleChange(event, position._id, executeMath())}
                                                                    type="number" name="rate2" value={position.rate2} placeholder="Enter 0 if none"
                                                                /> </td>
                                                                <td id='sub2'>     <input id='sub2' readOnly

                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    // type="number" name="sub2" value={position.sub2}
                                                                    type="text" name="sub2" value={"$" + (position.rate2 * position.frequency2).toFixed(2)}
                                                                /> </td>
                                                            </div> </div>
                                                        // : null
                                                    }
                                                </LineItemsGrid>
                                                <Client1Position>

                                                 
                                                </Client1Position>
                                                {/* button for next line */}
                                                {/* <button onClick={() => this.addStuff()}>add item</button> */}

                                                <TotalsPosition>
                                                    <CommentsBox>
                                                        <th>   <label htmlFor="comments"><span><FaComments /></span> Notes </label></th>
                                                        <textarea
                                                            onBlur={() => this.handleUpdate(position._id)}
                                                            onChange={(event) => this.handleChange(event, position._id)}
                                                            type="text" name="comments" value={position.comments} placeholder=''></textarea>
                                                    </CommentsBox>
                                                    {/* <input type="button" value="Calculate Client Subtotals" onClick={e =>
                                                        executeMath()} /> */}

                                                    <SubtotalBox>

                                                        {/* <tr><input type="button" id="subBtn" value="Calculate" name="math" onClick={e =>
                                                            executeMath()} /></tr> */}

                                                        <tr >  <label htmlFor="subtotal">Subtotal:</label>
                                                            <input id="viewSubs" readOnly
                                                                // onBlur={() => this.handleUpdate(position._id)}
                                                                // onChange={(event) => this.handleChange(event, position._id)}
                                                                // type="number" name="viewSubs" value={position.showSubs}
                                                                // type="number" name="subtotal" value={(position.sub1 + position.sub2).toFixed(2)}
                                                                // type="text" name="subtotal" value={"$" + (position.rate * position.frequency + position.rate2 * position.frequency2).toFixed(2)}
                                                                type="text" value={'$' + ((position.rate * position.frequency).toFixed(2) && (position.rate * position.frequency + position.rate2 * position.frequency2).toFixed(2))}

                                                            /></tr>



                                                        {/* Callum Enterprise Arise fees */}
                                                        <input id="showSubs" type="hidden" name="showSubs" value={position.showSubs} placeholder='0' />

                                                        <tr > <label htmlFor="arisefee" >Service Fee:</label>
                                                            <input className="arfee" id="arisefee" readOnly
                                                                // type="number" name="arisefee" value={20}
                                                                onBlur={() => this.handleUpdate(position._id)}
                                                                onChange={(event) => this.handleChange(event, position._id)}
                                                                type="text" name="arisefee" value={"$" + 19.75} placeholder='enter 0 if none' required='true'
                                                            // type="text" name="arisefee" value={19.75} placeholder='enter 0 if none' required='true'

                                                            /></tr>
                                                        <tr >
                                                            <label htmlFor="callumfee">Tax 10%:</label>


                                                            {/* for function calculations below */}

                                                            {/* <input id="callumfeeResults" type="number" name="callumfeeResults" value={position.callumfeeResults}
                                                                onBlur={() => this.handleUpdate(position._id)}
                                                                onChange={(event) => this.handleChange(event, position._id, executeMath())}
                                                            /> */}

                                                            <input id="callumfee" readOnly
                                                                onBlur={() => this.handleUpdate(position._id)}
                                                                onChange={(event) => this.handleChange(event, position._id)}

                                                                // onChange={(event) => this.handleChange(event, position._id, executeMath())}
                                                                // type="hidden" name="callumfee" value={0.10} 

                                                                // type="number" name="callumfee" value={(position.rate * position.frequency * .10).toFixed(2)}
                                                                // type="text" name="callumfee" value={"$" + (position.rate * position.frequency * .10 + position.rate2 * position.frequency2 * .10).toFixed(2)}
                                                                type="text" name="callumfee" value={'$' + ((position.rate * position.frequency * .10).toFixed(2) && (position.rate * position.frequency * .10 + position.rate2 * position.frequency2 * .10).toFixed(2))}

                                                            /></tr>



                                                        <TotalDue>
         

                                                            {/* Callum Ent totals */}
                                                            <input id="showTotalCalc" type="hidden" name="showTotalCalc" value={position.showTotalCalc} />

                                                            <tr className='subLineBrdr'>   <label htmlFor="totaldue">Total Due <span><FaHandHoldingUsd /></span> </label>
                                                                <input readOnly
                                                                    // id="total" type="number" name="total"  //for function calculations
                                                                    onBlur={() => this.handleUpdate(position._id)}
                                                                    onChange={(event) => this.handleChange(event, position._id)}
                                                                    // type="number" name="totaldue" value={((.10 * -position.rate * position.frequency + position.rate * position.frequency) - 19.75).toFixed(2)}
                                                                    // type="text" name="totaldue" value={"$" + ((.10 * -position.rate * position.frequency + position.rate * position.frequency) + (.10 * -position.rate2 * position.frequency2 + position.rate2 * position.frequency2) - 19.75).toFixed(2)}
                                                                    type="text" name="totaldue" value={'$' + ((.10 * -position.rate * position.frequency + position.rate * position.frequency - 19.75).toFixed(2) && ((.10 * -position.rate * position.frequency + position.rate * position.frequency) + (.10 * -position.rate2 * position.frequency2 + position.rate2 * position.frequency2) - 19.75).toFixed(2))}

                                                                /></tr>

                                                        </TotalDue>


                                                    </SubtotalBox>

                                                </TotalsPosition>
                                                <div className="memo noprint"> <b>Memo:</b>  <br />

                                                <i> {position.frequency} {position.client} {position.result}s at a rate of {"$" + position.rate} per {position.result} = <b> {"$" + (position.rate * position.frequency).toFixed(2)}. </b>
                                                        {position.frequency2} {position.client2}  {position.result2}s at a rate of {"$" + position.rate2} per {position.result2} = <b> {"$" + (position.rate2 * position.frequency2).toFixed(2)} </b>
                                                        for a total of <b>{'$' + ((position.rate * position.frequency).toFixed(2) && (position.rate * position.frequency + position.rate2 * position.frequency2).toFixed(2))} </b>
                                                        minus a service fee of <b>({"$" + 19.75})</b> and Tax 10% <b>({'$' + ((position.rate * position.frequency * .10).toFixed(2) && (position.rate * position.frequency * .10 + position.rate2 * position.frequency2 * .10).toFixed(2))})</b>.
                                                <b>  Total Due = {'$' + ((.10 * -position.rate * position.frequency + position.rate * position.frequency - 19.75).toFixed(2) && ((.10 * -position.rate * position.frequency + position.rate * position.frequency) + (.10 * -position.rate2 * position.frequency2 + position.rate2 * position.frequency2) - 19.75).toFixed(2))}</b></i>
                                                </div>
                                                <br />
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

                                            
                                        </PositionStyles> <br/><br/>
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