export interface IInputProps {
  disabled?: boolean;
  input: {
    onChange: (value: string) => void;
    value: string;
  };
  label?: string;
  maxLength?: number;
  meta: {
    touched: boolean;
    error?: string;
  };
  rows?: number;
  rowsMax?: number;
  size?: 'medium' | 'small' | undefined;
  type?: string;
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
}
