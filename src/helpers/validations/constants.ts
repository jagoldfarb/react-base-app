export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!_@#$%^&+=])/;
export const PASSWORD_MINIMUM_LENGTH = 8;

export const PHONE_NUMBER_REGEX = /^(\+|\(|[0-9]|[)]|[-]){6,20}$/i;
