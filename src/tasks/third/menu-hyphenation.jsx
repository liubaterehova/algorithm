import React from 'react';
import { Menu } from 'antd';
import { checkAllFields, TYPE_FORMATS } from './utils';

const MenuHyphenation = (changeState, state) => (
  <Menu
    onClick={({ key }) => { // TODO: function inside component ?
      changeState(() => ({
        format: key,
        res: checkAllFields({
          ...state,
          format: key,
        }),
      }));
    }}
  >
    <Menu.Item key={TYPE_FORMATS.NONE}>переносов нет</Menu.Item>
    <Menu.Item key={TYPE_FORMATS.SYMBOL}>перенос по символу</Menu.Item>
    <Menu.Item key={TYPE_FORMATS.SENTENCE}>
      перенос по предложению
    </Menu.Item>
    <Menu.Item key={TYPE_FORMATS.WORD}>перенос по слову</Menu.Item>
  </Menu>
);

export default MenuHyphenation;
