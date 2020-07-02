import React, { Component } from 'react'
import './InfoPanel.scss'
import { Card } from 'react-bootstrap';

export default class InfoPanel extends Component {
    state = {
        Country: undefined,
        TotalConfirmed: undefined,
        TotalDeaths: undefined,
        TotalRecovered: undefined,
        NewConfirmed: undefined,
        NewDeaths: undefined,
        NewRecovered:undefined,
        Date: undefined
      }
      componentDidMount(){
        fetch("https://api.covid19api.com/summary")
        .then(result => result.json())
        .then(data => {   
          this.setState({
            Country: data.Countries[174].Country,
            TotalConfirmed: data.Countries[174].TotalConfirmed,
            TotalDeaths:  data.Countries[174].TotalDeaths,
            TotalRecovered: data.Countries[174].TotalRecovered,
            NewConfirmed: data.Countries[174].NewConfirmed,
            NewDeaths:  data.Countries[174].NewDeaths,
            NewRecovered: data.Countries[174].NewRecovered,
            Date: data.Countries[174].Date.replace(/-/g, ".").replace(/T/g, " ").replace(/Z/g, " ")
          });
          console.log(data)

        })
      } 
    render() {
        return (
        <Card className="card align-items-center card text-center">
        <Card.Header as="h2">Дані</Card.Header>
        <Card.Body>
          <Card.Title as="h4">Дані за весь час</Card.Title>
          <Card.Text as="h6">
              Заражені:  {this.state.TotalConfirmed}
            </Card.Text>
          <Card.Text as="h6">
               Померли:  {this.state.TotalDeaths}
              </Card.Text>
          <Card.Text as="h6">
               Вилікувалися:  {this.state.TotalRecovered}  
            </Card.Text>       
          <Card.Title as="h4">Дані за сьогодні</Card.Title>
            <Card.Text as="h6">
                Заражені:  {this.state.NewConfirmed}
              </Card.Text>
              <Card.Text as="h6">
                Померли:  {this.state.NewDeaths}
              </Card.Text>
                <Card.Text as="h6">
                Вилікувалися:  {this.state.NewRecovered}
              </Card.Text>
              <Card.Title>Дані оновлено: {this.state.Date} </Card.Title>
        </Card.Body>
      </Card>
        )
    }
}
