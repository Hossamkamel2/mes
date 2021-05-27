export interface NavItem {
  displayName: string;
  photo?: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: NavItem[];
}
