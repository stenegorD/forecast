import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import { InstantSearch, ClearRefinements } from 'react-instantsearch-dom';
import Places from './Widget';
// import './App.css';

const searchClient = algoliasearch(
  'EJOAUCVFSP',
  '5e9ef49864b69749d0dd786a02b2c2ea'
);

class Autocomplete extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch Places</h1>
        <InstantSearch indexName="airports" searchClient={searchClient}>
          <div className="search-panel">
            <div className="search-panel__filters">
              <ClearRefinements />
            </div>

            <div className="search-panel__results">
              <Places
                defaultRefinement={{
                  lat: 37.7793,
                  lng: -122.419,
                }}
              />
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Autocomplete;