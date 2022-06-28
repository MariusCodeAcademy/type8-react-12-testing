import { render, screen, waitFor } from '@testing-library/react';
import FollowersList from './FollowersList';
import { BrowserRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fullMockResponse } from './fullResponse';

const mockResponse = {
  results: [
    {
      cell: 'lakjdlaskjdkalsjdlkas',
      name: {
        first: 'James',
        last: 'Bond',
      },
      picture: { large: 'https://randomuser.me/api/portraits/men/97.jpg' },
      login: { username: 'randomuser' },
    },
  ],
};

// mock servert for simulating response
const server = setupServer(
  rest.get('https://randomuser.me/api/?results=5', (req, res, ctx) => {
    return res(ctx.json(fullMockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const FollowersListWithRouter = (args) => (
  <BrowserRouter>
    <FollowersList {...args} />
  </BrowserRouter>
);
// it should render first item
// it should render 5 items
// it should render first item
it('should render first item', async () => {
  render(<FollowersListWithRouter />);
  let firstFollower;
  await waitFor(() => {
    firstFollower = screen.getByTestId('follower-1');
  });

  expect(firstFollower).toBeInTheDocument();
});

it('should render 5 items', async () => {
  render(<FollowersListWithRouter />);
  const fiveFollowersArr = await screen.findAllByTestId(/follower/i);
  expect(fiveFollowersArr).toHaveLength(5);
});
