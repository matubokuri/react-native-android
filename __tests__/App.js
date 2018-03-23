import 'react-native';
import React from 'react';
import { configure, shallow } from 'enzyme';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const dataSource = {
  "title": "The Basics - Networking",
  "description": "Your app fetched this from a remote endpoint!",
  "movies": [
    { "title": "Star Wars", "releaseYear": "1977" },
    { "title": "Back to the Future", "releaseYear": "1985" },
    { "title": "The Matrix", "releaseYear": "1999" },
    { "title": "Inception", "releaseYear": "2010" },
    { "title": "Interstellar", "releaseYear": "2014" }
  ]
}

fetch = jest.fn((url: string) => {
  return new Promise((resolve, reject) => {
    const value = {
      json: () => {
        return dataSource
      }
    }
    process.nextTick(() => resolve(value))
  })
})

it('renders correctly', async () => {
  expect.assertions(5)
  const tree = shallow(
    <App />
  );
  expect(tree.state('isLoading')).toBe(true)
  expect(tree.state('dataSource')).toBeUndefined()

  await tree.instance().componentDidMount()

  expect(tree.state('isLoading')).toBe(false)
  expect(tree.state('dataSource')).toHaveLength(dataSource.movies.length)

  tree.setState({ 'dataSource': dataSource.movies })

  expect(tree).toMatchSnapshot()
});
