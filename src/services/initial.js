export const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const initialStatus = {
  filter: '',
  selectID: '',
  modalShow: false,
};

export const initialAuth = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

export const initialContactForm = {
  name: '',
  number: '',
};

export const initialLoginForm = {
  email: '',
  password: '',
  showPassword: true,
};

export const initialRegisterForm = {
  name: '',
  email: '',
  password: '',
  showPassword: false,
};