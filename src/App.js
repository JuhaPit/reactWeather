import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.state = {
        weather: [],
        temp: 0,
        url: '',
        city: '',
    };
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

fetchWeather() {
  console.log('fetching...');
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&APPID=77aa2281bd0ba3aca95ba4898c36866c&units=metric')
    .then(result => result.json())
    .then(result => this.setState({
          city: this.state.city, 
          weather: result.weather[0],
          temp: result.main.temp,
          url : 'http://openweathermap.org/img/w/' + result.weather[0].icon + '.png',
      })
  );

  console.log(this.state.items);
}

 render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.fetchWeather}>Send</button>
        <p>City: {this.state.city}</p>
        <p>Temperature: {this.state.temp} Celsius</p>
        <p>Weather:  {this.state.weather.main}</p>
        <img alt="weathericon" src={this.state.url}/>
      </div>
    );
  }
}

export default App;
