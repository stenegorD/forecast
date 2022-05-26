import React, { Component } from 'react';
import places from 'places.js';
import connect from './Connector';

class Places extends Component {
  createRef = c => (this.element = c);

  componentDidMount() {
    const { refine, defaultRefinement } = this.props;

    const autocomplete = places({
      container: this.element,
      type: "city",
      language: "ua",
      // Algolia Places options
    });

    autocomplete.on('change', event => {
      refine(event.suggestion.latlng);
    });

    autocomplete.on('clear', () => {
      refine(defaultRefinement);
    });
  }

  render() {
    return (
      <div style={{ marginBottom: 20, 
        // backgroundColor: "#000000",
        // color: "#FFFFFF",
        // opacity: 0.9, 
        }}>
        <input
          ref={this.createRef}
          type="search"
          id="city-input"
          placeholder="Where are we going?"
        />
      </div>
    );
  }
}

export default connect(Places);
