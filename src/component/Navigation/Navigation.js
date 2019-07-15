import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import List from '../List/List';
import Listitem from '../List/Listitem';
import { NavLink } from 'react-router-dom';
import HomeIcon from './HomeIcon';
import Listitemimg from '../List/Listitemimg';

class Navigation extends Component {
  render() {
    return(
      <Grid fluid>
        <Row>
          <Col>
            <List>
              <Listitem>
                <NavLink to='/'>
                  <img src={HomeIcon} />
                </NavLink>
              </Listitem>
              <Listitem>
                <NavLink to='/'>Home</NavLink>
              </Listitem>
              <Listitem>
                <NavLink to='/'>Home</NavLink>
              </Listitem>
            </List>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Navigation;