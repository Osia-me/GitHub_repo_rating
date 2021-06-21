import Store from '../../../Store.js';
import { shallow } from 'enzyme';
import BestList from "../BestList";

test('renders BestList without crashing', () => {
  const wrapper = shallow(
    <Store className="app">
      <BestList/>
    </Store>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains(<BestList />)).toBe(true);
});
