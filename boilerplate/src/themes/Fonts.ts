import Colors from './Colors';

const type = {
  base: 'Avenir-Book',
  semiBold: 'Avenir-Black',
  bold: 'Avenir-Black',
  light: 'HelveticaNeue-Italic',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  h7: 17,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  smallest: 10,
  tiny: 8.5,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.semiBold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.semiBold,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  h7: {
    fontFamily: type.base,
    fontSize: size.h7,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  input: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  label: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: Colors.placeHolderTextColor,
  },
  title: {
    color: Colors.black,
    fontFamily: type.semiBold,
    fontSize: size.h5,
  },
  headerFont: {
    color: Colors.text,
    fontWeight: '400',
    zIndex: 1,
    fontFamily: type.semiBold,
    fontSize: size.regular,
    lineHeight: 23,
  },
};

export default {
  type,
  size,
  style,
};
