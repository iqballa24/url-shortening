export interface InputProps {
  id: string;
  type: string;
  value: string;
  hasError: boolean;
  placeholder: string;
  messageError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
