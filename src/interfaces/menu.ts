import Icon from '@ant-design/icons/lib/components/Icon';

interface MenuOption {
  actionName: string;
  icon?: typeof Icon;
  action?: any; // todo: this should be fixed in the upcoming days
}

/**
 * Defines each menu item that is availaible on the top of the navigation bar.
 * The reasoning behind implementation of an interface is to facilitate
 * implementing searching in the future.
 */
export interface MenuItem {
  name: string;
  icon: typeof Icon;
  content: MenuOption[];
}
