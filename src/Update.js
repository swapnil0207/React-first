import React from 'react'
//Search
export const Update = (props) => {
    return (
        <div className="container App-bagc">
            <h2>{props.tex} Total Reivews : {props.obj.filter(i=>i.company === props.tex).reduce((ac)=>{return ac+=1},0)}</h2>
            {
            props.obj.filter(i=>i.company === props.tex).map(item=>{return(
            <div key={item.id+item.company}  className="border App-margin" >
            <div className="card-header">
                <h3 >{item.id} {item.company}</h3>
                <h5>Role:  {item.role}</h5>
            </div>
            <h5 className="card-body">{Boolean(item.review)?item.review:"Not yet written"}</h5>
            <hr/>
            </div>
            )})}
                   
            
    
        </div>
    )
}
