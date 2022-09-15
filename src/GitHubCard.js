import renderer from 'react-test-renderer';
import Link from '../Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://github.com/jaguirre815">Github</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});