import React from 'react';
import type { MenuProps } from 'antd';
import {  Dropdown, message, Space } from 'antd';
import '@/styles/DropdownButton.css';
import '@/styles/global.css';

interface Item {
  key: string;
  label: string;
}

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const item = items && items[0];
  if (item) {
      const link = document.createElement('a');
      link.href = `/downloads/${item.label}`;
      link.setAttribute('download', item.label);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  } else {
      console.log("No downloads");
  }
};


const handleMenuClick: MenuProps['onClick'] = (e) => {
  const item = items.find(item => item.key === e.key);
  if (item) {
      const link = document.createElement('a');
      link.href = `/downloads/${item.label}`;
      link.setAttribute('download', item.label);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
};


const items: Item[] = [
  {
    label: 'Caelis_Chaos_0.3.0.rar',
    key: '0'
  },
  {
    label: 'Caelis Chaos 0.2.4.exe',
    key: '1'
  }

];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const DropdownButton: React.FC = () => {
  return (
  <Space wrap>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} className='dropdown'>
      {items[0]?.label}
    </Dropdown.Button>
  </Space>
)};

export default DropdownButton;