import React, { Component } from 'react'
import  {Link} from  'react-router-dom'
import './header.css'
import CurrentDateAndTime from './CurrentDateAndTime'



export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            curTime:""
        }
    }
    
    componentWillMount() {
        setInterval( () => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        },1000)
      }
  render() {
    return (
      <div className = "header">
         <div className="company-name">
            <Link to = "/app">MEDEasy</Link>
         </div>
         <CurrentDateAndTime time = {this.state.curTime} />
      </div>
    )
  }
}

