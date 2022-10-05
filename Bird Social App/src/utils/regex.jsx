export const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

export const validUsername = new RegExp(
  '^(?=.*?[A-Za-z0-9]).{5,}$'
);

export const validName = new RegExp(
  '^(?=.*?[A-Za-z]).{3,}$'
);

export const validPassword = new RegExp('^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$%^&*])(?=.*?[0-9]).{8,}$');