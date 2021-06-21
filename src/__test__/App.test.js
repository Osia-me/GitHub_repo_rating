import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App.js';
import { Header } from '../components/templates';
import { BestList } from '../components/lists';

describe('Parent Component', () => {
  it('renders Child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<BestList />)).toEqual(true);
  });
});
