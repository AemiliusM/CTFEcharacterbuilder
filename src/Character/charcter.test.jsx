import { screen, render } from '@testing-library/react';
import Character from './Character.jsx';

it('Should display the Character from initial load', () => {
  const { container } = render(<Character head="baby" middle="strong" bottom="twisted" />);

  const head = screen.getByLabelText(/head/i);
  const torso = screen.getByLabelText(/middle/i);
  const legs = screen.getByLabelText(/bottom/i);

  expect(head).toHaveStyle(`background-image: url(./baby-head.png)`);
  expect(torso).toHaveStyle(`background-image: url(./strong-middle.png)`);
  expect(legs).toHaveStyle(`background-image: url(./twisted-bottom.png)`);
  expect(container).toMatchSnapshot();
});
