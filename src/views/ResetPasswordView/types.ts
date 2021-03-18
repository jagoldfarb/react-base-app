export interface IResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

export interface IResetPasswordViewProps {
  onSubmit: (formData: IResetPasswordFormData) => void;
}
