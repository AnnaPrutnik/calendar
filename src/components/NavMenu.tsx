import React from 'react';
import { Menu, MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { RoutesNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { isAuthSelector } from '../store/selectors';
import { useActions } from '../hooks/useAction';

export enum MenuItemsNames {
  LOGIN = 'Login',
  LOGOUT = 'Logout',
}

const NavMenu = () => {
  const isAuth = useTypedSelector(isAuthSelector);
  const { logout } = useActions();
  const notAuthItems = [
    {
      label: <NavLink to={RoutesNames.LOGIN}>Login</NavLink>,
      key: MenuItemsNames.LOGIN,
    },
  ];
  const authItems = [
    { label: MenuItemsNames.LOGOUT, key: MenuItemsNames.LOGOUT },
  ];

  const onClickItem: MenuProps['onClick'] = (e) => {
    if (e.key === MenuItemsNames.LOGOUT) {
      logout();
    }
  };

  return (
    <Menu
      theme='dark'
      mode='inline'
      items={isAuth ? authItems : notAuthItems}
      selectable={false}
      onClick={onClickItem}
    />
  );
};

export default NavMenu;

{
}
