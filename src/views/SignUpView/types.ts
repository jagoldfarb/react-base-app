export interface ISignUpFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

export interface ISignUpViewProps {
  onSubmit: (formData: ISignUpFormData) => void;
}
