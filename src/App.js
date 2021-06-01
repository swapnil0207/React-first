//import logo from './logo.svg';
import './App.css';
import {About} from './About.js';
import {Add} from './Add.js';
import {Login} from './Login.js';
import {Update} from './Update.js';
import { Header } from './Header';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SearchIcon from '@material-ui/icons/Search';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import DomainIcon from '@material-ui/icons/Domain';

let objt=[ 
  {id:1,review:"Review 1",company:"Company1", role:"Role1",date:"2015-03-25"},
  {id:2,review:"Review 2",company:"Company2",role:"Role2",date:"2015-03-25"},
];

let register=[
  {login:"123",passw:"123"}
]

function outf()
{
  let id=2
  function inf()
  {
    id=id+1
    return id
  }
  return inf
}
let con=outf()
function App() {
  const [review, setreview] = useState("TryReview")
  const [company, setcompany] = useState("TryCompany")
  const [date, setdate] = useState("yyyy-MM-dd")
  const [role, setrole] = useState("TryRole")
  const [obj, setobj] = useState(objt)
  const [tex, settex] = useState("")

let addin=()=>{
const tempobj={id:con(),review:review,company:company,role:role,date:date}
  obj.push(tempobj)
console.log(obj)
setreview("r")
setcompany("c")
setrole("r")
setdate("yyyy-MM-dd")
}

let delit=(todel)=>setobj(obj.filter(item=>item!==todel))

let addreg=(passw)=>{register.push({login:"123",passw:passw})}

let upit=(index,company,role,review)=>
{
  obj[index].company=company
  obj[index].role=role
  obj[index].review=review
}

  return (
<>
<Router>
<Header/>
<Switch>
<Route exact path="/" >
  <div className="App-header">
    Welcome
  </div>
</Route>


<Route exact path="/login" >
  <Login addreg={addreg} register={register}></Login>
</Route>



<Route exact path="/add" >
  <div className="container ">
    
    <div className="App-center App-header">
      <form className="border" onSubmit={e => e.preventDefault()}>
      <label>
        Company Name:  <DomainIcon fontSize="large"/><br />
        <input className="App-margin" value={company} onChange={event=>setcompany(event.target.value)}/><br/>
      </label>
      <label>
        Role:  <WorkOutlineIcon/><br />
        <input className="App-margin" value={role} onChange={event=>setrole(event.target.value)}/><br/>
      </label><br/>
      <label>
        Date:
        <input className="App-margin" type="date" value={date} onChange={event=>setdate(event.target.value)}/>
      </label>
      <br/>
      <label>
        Review:  <ThumbUpIcon/>/<ThumbDownIcon/>
      </label>
      <br/>
      <textarea className="App-margin" value={review} onChange={event=>setreview(event.target.value)}/><br/>
      <button onClick={addin}>
      Save<br/>
      <SaveAltIcon  fontSize="large"/>
      </button>
      </form>
    </div>
  </div>
</Route>

<Route exact path="/filter">
  <div className="container">
  <h3>Search:  <input value={tex} onChange={e=>settex(e.target.value)} placeholder="Search by Company"/><SearchIcon fontSize="large"/></h3>
  {tex===""?
  <About obj={obj} tex={tex}/>
    :
    <Update obj={obj} tex={tex}/>
  }
</div>
</Route>

<Route exact path="/delete">
  
  <Add obj={obj} delit={delit} upit={upit}/>
  
  
</Route>


</Switch>

</Router>

</>
    
  );
}

export default App;
