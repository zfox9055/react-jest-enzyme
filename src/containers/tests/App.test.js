import { App } from '../App';
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    const props = {
      isFetching: false,
      dispatch: jest.fn(),
      selectedSubreddit: "reactjs",
      posts: [],
    };
    const wrapper = shallow(<App {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
