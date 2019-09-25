import { Platform, Dimensions } from 'react-native';

export const isAndroid = () => {
  return Platform.OS === 'android';
};

export const isIphone = () => {
  return Platform.OS === 'ios';
};

export const isIphoneX = () => {
  const dimension = Dimensions.get('window');
  const { height, width } = dimension;

  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
};

export const validateEmail = (email: string): boolean => {
  if (!email) {
    return false;
  }
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(email);
};

export const validatePassword = (password: string): boolean => {
  if (!password) {
    return false;
  }
  if (password.length < 8) {
    return false;
  }
  const expression = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
  return expression.test(password);
  return true;
};

export const getSpecificDate = (date: Date) => {
  if (date) {
    let convertedDate = new Date(date);
    const month = convertedDate.getMonth() + 1;
    const day = convertedDate.getDate();
    const year = convertedDate.getFullYear();
    return year + '-' + month + '-' + day;
  } else {
    return '';
  }
};

export const getDateConverter = (date: Date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (date) {
    let convertedDate = new Date(date);
    const month = months[convertedDate.getMonth()];
    const day = convertedDate.getDate();
    const year = convertedDate.getFullYear();

    return day + ' ' + month + ' ' + year;
  } else {
    return '';
  }
};
