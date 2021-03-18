import { ISignUpFormData } from 'views/SignUpView/types';

export interface ISignUpFormProps {
  onSubmit: (formData: ISignUpFormData) => void;
}
