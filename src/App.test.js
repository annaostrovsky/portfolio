import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainContent from './components/main-content/main-content';
import { mount, shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cart from './components/cart';
import Header from './components/main-content/header';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home';

configure({ adapter: new Adapter() });
describe(`App`, () => {
  let props;
  let mountedAppComponent;

  const appComponent = () => {
    if (!mountedAppComponent) {
      mountedAppComponent = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    }
    return mountedAppComponent
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('is App', () => {
    const mountedAppComponent = <App />;
    expect(mountedAppComponent.type).toBe(App)
  })

  it("has a header", () => {
    expect(appComponent().find(Header).length).toBeGreaterThan(0)
  })

  it("has a SideBar", () => {
    expect(appComponent().find(Sidebar).length).toBeGreaterThan(0)
  })

  it("has a Home page", () => {
    expect(appComponent().find(Home).length).toBeGreaterThan(0)
  })


  it('Clicking on login button shows main content', () => {
    appComponent().find(Header).find('.header__button').simulate('click')
    expect(appComponent().find(MainContent).length).toBeGreaterThan(0);
  })

  it('Clicking on login button shows Link to checkout', () => {
    appComponent().find(Header).find('.header__button').simulate('click')
    expect(appComponent().find(".header__checkoutLink"));
  })
});


