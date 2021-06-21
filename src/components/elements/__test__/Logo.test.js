
import Logo from '../Logo/Logo';
import { shallow } from 'enzyme';
test('renders learn react link', () => {

  const wrapper = shallow(<Logo />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('div').text()).toContain('GitHub repos');
});
