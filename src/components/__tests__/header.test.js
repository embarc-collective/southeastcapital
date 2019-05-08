import React from "react"
import renderer from "react-test-renderer"
import {PureHeader as Header} from "../header"



describe("Header", () => {
  it("renders without crashing", () => {
    const tree = renderer
    .create(
      <Header siteTitle="Tampa Bay" backgroundColor='white'>
        <div>foo</div>
        <div>bar</div>
      </Header>
    )
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})