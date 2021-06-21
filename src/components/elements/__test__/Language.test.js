import { shallow } from 'enzyme';
import Language from '../Language/Language';
import Store from '../../../Store';

it('renders Language component', () => {
  const wrapper = shallow(
    <Store className="app">
      <Language />
    </Store>

  );
  expect(wrapper).toMatchSnapshot();
});
