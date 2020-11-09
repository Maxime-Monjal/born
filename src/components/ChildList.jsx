/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import axios from 'axios';
import Child from './Child';

class ChildList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameList: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_prenoms-enfants-nes-nantes&q=&rows=30&facet=prenom&facet=sexe&facet=occurence&facet=year&apikey=5f0a64b92cf369cddcf2977da97cfad9b6aac115497c3cdbb8a624b5'
      )
      .then((response) => {
        this.setState({
          nameList: response.data.records,
        });
      });
  }

  render() {
    const { nameList } = this.state;
    return (
      <div className="ChildList">
        <ul>
          {nameList.map((child) => {
            return (
              <li key={child.recordid}>
                <Child {...child.fields} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ChildList;
