import Store from '../../../Store.js';
import { shallow } from 'enzyme';
import Card from "../Card";

test('renders Card without crashing', () => {
  const wrapper = shallow(
    <Store className="app">
      <Card/>
    </Store>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains(<Card />)).toBe(true);
});
