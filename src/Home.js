import React, { Component } from "react";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=6&offset=6")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            firstName: `${data.name}`

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
            <h2>Pokemon</h2>
            {
              items.length > 0 ? items.map(item => {
              const {firstName} = item;
               return (

               <div className="bgCircle">
               <center></center><br />
               <div className="ctr">
                  {firstName}
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Home;