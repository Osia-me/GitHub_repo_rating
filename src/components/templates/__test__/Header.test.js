import Store from '../../../Store.js';
import { shallow } from 'enzyme';
import Header from "../Header";

test('renders Header without crashing', () => {
  const wrapper = shallow(
    <Store className="app">
      <Header/>
    </Store>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains(<Header />)).toBe(true);

});
