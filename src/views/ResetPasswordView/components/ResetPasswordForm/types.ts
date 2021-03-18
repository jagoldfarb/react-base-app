import { IResetPasswordFormData } from 'views/ResetPasswordView/types';

export interface IResetPasswordFormProps {
  onSubmit: (formData: IResetPasswordFormData) => void;
}
