import React, { Component } from "react";


class Species extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon-species/?offset=6&limit=6")
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
            <h2>Species</h2>
            {
              items.length > 0 ? items.map(item => {
              const {firstName} = item;
               return (

               <div className="bgCircle">
               <center></center><br />
               <div className="ctr">
                  {firstName}<br />
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Species;