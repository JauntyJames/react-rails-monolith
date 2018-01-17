import React, { Component } from 'react';

import CerealTile from './CerealTile'

class CerealsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cereals: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/cereals')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(json => {
      this.setState({ cereals: json.cereals })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let tiles = this.state.cereals.map(cereal => {
      return(
        <CerealTile
          name={cereal.name}
          description={cereal.description}
        />
      )
    })

    return(
      <div>
        {tiles}
      </div>
    )
  }
}

export default CerealsIndexContainer;
