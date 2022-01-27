import React from 'react'
import Homepage from '../Homepage';
import { shallow, mount } from 'enzyme'
describe("Homepage component", () => {
   test("it's renders", () => {
   const wrapper = shallow(<Homepage />);
   expect(wrapper.exists()).toBe(true);
 
   });

   test("Contain text",()=> {
     const wrapper = shallow(<Homepage/>);
     expect(wrapper.find("div").text()).toBe("Welcome");
   })
});