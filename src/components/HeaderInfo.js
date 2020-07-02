import React, { Component } from 'react';
import './HeaderInfo.scss';

export default class HeaderInfo extends Component {
    render() {
        return (
            <div className="Header" style={{paddingLeft: '22px'}}>
                <h1>Ситуація по зараженим COVID-19 в Україні</h1>
          </div>
        )
    }
}
