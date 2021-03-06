import { shallow, mount } from 'enzyme';
import React from 'react';
import { LoginForm, mapDispatchToProps } from '../loginform';
import { changeUsername, changePassword } from '../actions';
import { push } from 'react-router-redux';
import { IntlProvider } from 'react-intl';

describe('<LoginForm />', () => {
  it('should render error message', () => {
    const errormessage = 'generated error message';
    const renderedComponent = shallow(
      <LoginForm error={errormessage} />
    );
    expect(renderedComponent.find('[role="alert"]').length).toEqual(1);
  });

  it('should render not error message', () => {
    const renderedComponent = shallow(
      <LoginForm />
    );
    expect(renderedComponent.find('[role="alert"]').length).toEqual(0);
  });

  it('should link to /forgetpassword', () => {
    const openRouteSpy = jest.fn();
    const openRoute = (dest) => {
      if (dest === '/forgetpassword') {
        openRouteSpy();
      }
    };
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <LoginForm changeRoute={openRoute} />
      </IntlProvider>
    );
    const button = renderedComponent.find('a').find('#forgetpassword_id');
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });

  it('should link to /registeration', () => {
    const openRouteSpy = jest.fn();
    const openRoute = (dest) => {
      if (dest === '/registration') {
        openRouteSpy();
      }
    };

    const renderedComponent = mount(
      <IntlProvider locale="en">
        <LoginForm changeRoute={openRoute} />
      </IntlProvider>
    );
    const button = renderedComponent.find('a').find('#signup_id');
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
        expect(result.onChangePassword).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });

      it('should dispatch changePassword when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const password = 'pw';
        result.onChangePassword({ target: { value: password } });
        expect(dispatch).toHaveBeenCalledWith(changePassword(password));
      });
    });
  });

  describe('changeRoute', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.changeRoute).toBeDefined();
    });

    it('should dispatch push when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const route = '/';
      result.changeRoute(route);
      expect(dispatch).toHaveBeenCalledWith(push(route));
    });
  });
});
