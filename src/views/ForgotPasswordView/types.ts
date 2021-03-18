export interface IForgotPasswordFormData {
  email: string;
}

export interface IForgotPasswordViewProps {
  onSubmit: (formData: IForgotPasswordFormData) => void;
}
