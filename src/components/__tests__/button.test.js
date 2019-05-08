import React from 'react';
import renderer from "react-test-renderer"
import {PureButton as Button} from '../button';

describe("Button", () => {
  it("renders without crashing", () => {
    const tree = renderer
    .create(<Button 
      text='Button'
      url='/slug'
    />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders without crashing when link==false", () => {
    const tree = renderer
    .create(<Button 
      text='Button'
      use_border={false}
      theme='primary'
      link={false}
      url='/slug'
    />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders without crashing when theme=secondary, type=line, use_border=true, link=false, new_tab=true", () => {
    const tree = renderer
    .create(<Button 
      text='Button'
      use_border={true}
      theme='secondary'
      type='line'
      link={false}
      url='/slug'
      new_tab={true}
    />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})