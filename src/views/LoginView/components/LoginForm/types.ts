import { ILoginFormData } from 'views/LoginView/types';

export interface ILoginFormProps {
  onSubmit: (formData: ILoginFormData) => void;
}
