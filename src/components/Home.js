import React, {Component} from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default class Home extends Component{

    constructor() {
      super();
      this.state = {
        quotes: [],
        loading: true,
      };
    }

    
  
    componentDidMount() {
      fetch('https://programming-quotes-api.herokuapp.com/Quotes')
      .then(responce => responce.json())
      .then(responceData => {
        this.setState({quotes: responceData})
        // console.log(responceData[0].text)
      })
      .catch(error => {
        console.log('Error fetching data or parsing data: ', error)
      })
    }
  
  
    render() {
      return (
      <div className="home-conatiner">
          <Header />
          <MainContent data={this.state.quotes.slice(Math.max(this.state.quotes.length - 10, 0))}/>
          <Footer />
      </div>
      )
  
    }
  
  };