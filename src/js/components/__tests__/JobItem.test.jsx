import { render, screen } from '@testing-library/react';
import JobItem from '../JobItem';

test('renders JobItem component correctly', () => {
  render(<JobItem
    id={33}
    requirements={"requirements..."}
    description={"desc text"}
    user_name={"Leon Magee"}
    phone={"333-333-3333"}
    email={"leonmagee@gmail.com"}
    created_at={"2022-xxx"}
/>);
  const userName = screen.getByText(/Leon Magee/i);
  expect(userName).toBeInTheDocument();
});
