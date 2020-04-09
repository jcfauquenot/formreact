import React from "react"

class Form extends React.Component {

state ={
    firstame: "abdou",
    email: "jcfauquenot@gmail.com"
}

handelChange =  event => {
    this.setState( { [event.target.name]: event.target.value } )
    console.log(event.target.name)
}

render() {

    //console.log(this.state)
    return ( 
    <div>
        pouletName : {this.state.firstame}
    <br />
        email : {this.state.email}
    <br />
        <p><input name="firstname" type="text" onChange={this.handelChange} /></p>
        <p><input name="email" type="email" onChange={this.handelChange}/></p>
    </div>
    )
    }
}

export default Form