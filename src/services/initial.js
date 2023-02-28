export const initialState = {
  contacts: [],
  error: null,
  isLoading: false,
  isFulfilled: false,
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
};

export const initialRegisterForm = {
  name: '',
  email: '',
  password: '',
};