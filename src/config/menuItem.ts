import {MenuItem} from '../interfaces/menu';
import {FileOutlined, QuestionCircleOutlined} from '@ant-design/icons';

const menuItems: MenuItem[] = [
  {
    name: 'File',
    icon: FileOutlined,
    content: [
      {
        actionName: 'Upload Files',
      },
    ],
  },
  {
    name: 'Help',
    icon: QuestionCircleOutlined,
    content: [
      {
        actionName: 'About',
      },
    ],
  },
];

export default menuItems;
