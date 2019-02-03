import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

class MainTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: 'Resultados de la encuesta de sueldos 2019.01',
  }

  render() {
    return (
      <div className='main-title-wrapper'>
        <h1 className='main-title'>
          <span>Resultados de la</span><br/>
          <span>Encuesta de Sueldos 2019.01</span>
        </h1>
      </div>
        )
      }
    }
    
export default MainTitle;