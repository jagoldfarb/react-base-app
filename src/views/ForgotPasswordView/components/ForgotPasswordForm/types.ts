import { IForgotPasswordFormData } from 'views/ForgotPasswordView/types';

export interface IForgotPasswordFormProps {
  onSubmit: (formData: IForgotPasswordFormData) => void;
}
