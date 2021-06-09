import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Row, Col, Dropdown, Menu, Button} from 'antd';
import {grey} from '@ant-design/colors';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import menuItems from '../../config/menuItem';
import {MenuItem} from '../../interfaces/menu';

const useStyles = createUseStyles({
  navbarContainer: {
    backgroundColor: grey[5],
    maxHeight: '64px',
    height: '64px',
  },
  dropdownButton: {
    height: '100%',
    boxShadow: false,
    borderColor: false,
  },
});

const DropdownItem: React.FC<MenuItem> = (props: MenuItem) => {
  const classes = useStyles();
  const [dropdownState, setDropdownState] = useState(false);

  const onDropdownVisibleChange = () => {
    setDropdownState(!dropdownState);
  };

  const menu = (
    <Menu>
      {props.content.map((item, idx) => (
        <Menu.Item key={idx} icon={item.icon ? item.icon : undefined}>
          {item.actionName}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        onVisibleChange={onDropdownVisibleChange}
      >
        <Button title={props.name} className={classes.dropdownButton}>
          {<props.icon />} {dropdownState ? <UpOutlined /> : <DownOutlined />}
        </Button>
      </Dropdown>
    </>
  );
};

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <header className="App-header">
        <Row className={classes.navbarContainer}>
          <Col span={24}>
            {menuItems.map(item => (
              <span key={item.name}>
                <DropdownItem {...item} />
              </span>
            ))}
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Navbar;
