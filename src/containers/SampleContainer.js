/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Title } from 'native-base';

export default class SampleContainer extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>SampleContainer</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ flex: 1 }}>
          <Title>SampleContainer</Title>
        </Content>
      </Container>
    );
  }
}
