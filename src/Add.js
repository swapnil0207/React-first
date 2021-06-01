import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';
//DELETE
export const Add = (props) => {
    

    return (
        <div className="container App-bagc">
            {
            props.obj.map(item=>{
            return(
            <div key={item.id+item.company}  className="border" >
            <div className="card-header">
                <div className="row">
                    <h3>{item.id} {item.company}</h3>
                    <DeleteIcon fontSize="large" onClick={()=>props.delit(item)}></DeleteIcon>
                    
                </div>
                
                <h5>Role:  {item.role}</h5>
                
            </div>
            <h5 className="card-body">{Boolean(item.review)?item.review:"Not yet written"}</h5>
            <hr/>
            </div>
            )})
        }
        </div>
    )
}
