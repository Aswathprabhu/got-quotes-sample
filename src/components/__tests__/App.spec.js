import App from '../App.vue';
import { render } from '@testing-library/vue';

describe('App Page - Initial Render', () => {
  it('Initial render', () => {
    const { container } = render(App, {
      stubs: ['router-view'],
    });
    expect(container).toMatchSnapshot();
  });
});
