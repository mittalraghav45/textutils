import React from 'react'

function Alert(props) {
  return (

      props.alert && <div className={`alert alert-${props.alert.type}alert-dismissible fade ${props.alert.msg}`} role="alert">
             :{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
  
  )
}
export default Alert;