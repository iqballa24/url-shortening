export interface ButtonsProps {
  children?: React.ReactNode;
  type: any;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isPrimaryOnMobile?: boolean;
  isSecondaryOnMobile?: boolean;
  noRounded?: boolean;
  full?: boolean;
  value?:string
  onClick?: () => void;
}
