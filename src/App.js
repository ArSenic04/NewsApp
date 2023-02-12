
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  pagesize=3;
  
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={4}
            color='#f11946'
            progress={this.state.progress} 
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" pagesize={this.pagesize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" pagesize={this.pagesize} country="in" category="business" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pagesize={this.pagesize} country="in" category="health" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pagesize={this.pagesize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" pagesize={this.pagesize} country="in" category="technology" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pagesize={this.pagesize} country="in" category="science" />}></Route>
            <Route exact path="/world" element={<News setProgress={this.setProgress}  key="world" pagesize={this.pagesize} country="" category="general" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

