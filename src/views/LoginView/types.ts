export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginViewProps {
  onSubmit: (formData: ILoginFormData) => void;
}
