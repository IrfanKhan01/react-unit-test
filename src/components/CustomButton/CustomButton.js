import React from 'react'
import './CustomButton.css'



const CustomButton = React.forwardRef((props, ref) => {
    return (
        <button ref={ref} className="custom-button" {...props}>{props.title}</button>

    )
})


export default CustomButton;