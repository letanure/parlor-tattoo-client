export type SizeOptions =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

export type Sizes = {
  [key in SizeOptions]: string
}

type ColorDefinition = {
  c050: string
  c100: string
  c200: string
  c300: string
  c400: string
  c500: string
  c600: string
  c700: string
  c800: string
  c900: string
  lightFrom: number
}

type ColorGroup = {
  [key: string]: ColorDefinition
}

const grid = {
  container: '130rem',
  gutter: '3.2rem'
}

const fontSizes: Sizes = {
  xsmall: '1.2rem',
  small: '1.4rem',
  medium: '1.6rem',
  large: '1.8rem',
  xlarge: '2.0rem',
  xxlarge: '2.8rem'
}

const font = {
  family: {
    heading: {
      local: true,
      name: 'Varela Round',
      src: '/fonts/varela-round-v13-latin-regular.woff2',
      weight: 400
    },
    body: {
      local: true,
      name: 'Noto Sans',
      src: '/fonts/noto-sans-v21-latin-regular.woff2',
      weight: 400
    }
  },
  size: fontSizes,
  weight: {
    light: 300,
    normal: 400,
    bold: 600
  }
}

const color_red: ColorDefinition = {
  c050: '#ffebee',
  c100: '#ffcdd2',
  c200: '#ef9a9a',
  c300: '#e57373',
  c400: '#ef5350',
  c500: '#f44336',
  c600: '#e53935', // 000
  c700: '#d32f2f', // fff
  c800: '#c62828',
  c900: '#b71c1c',
  lightFrom: 700
}

const color_pink: ColorDefinition = {
  c050: '#fce4ec',
  c100: '#f8bbd0',
  c200: '#f48fb1',
  c300: '#f06292',
  c400: '#ec407a',
  c500: '#e91e63', // 000
  c600: '#d81b60', // fff
  c700: '#c2185b',
  c800: '#ad1457',
  c900: '#880e4f',
  lightFrom: 600
}

const color_purple: ColorDefinition = {
  c050: '#f1e5fe',
  c100: '#d8bffb',
  c200: '#be93f9',
  c300: '#a166f0', // 000
  c400: '#8943e3', // fff main color
  c500: '#721ad6',
  c600: '#6714d0',
  c700: '#5806c8',
  c800: '#4900c0',
  c900: '#2f00b1',
  lightFrom: 400
}

const color_blue: ColorDefinition = {
  c050: '#e6e7fe',
  c100: '#c0c3fb',
  c200: '#939cf9',
  c300: '#6475ee', // 000
  c400: '#4557de', // fff
  c500: '#1f39ce',
  c600: '#1931c4',
  c700: '#0926b7',
  c800: '#0019aa',
  c900: '#000093',
  lightFrom: 400
}

const color_teal: ColorDefinition = {
  c050: '#e0f2f1',
  c100: '#b2dfdb',
  c200: '#80cbc4',
  c300: '#4db6ac',
  c400: '#26a69a',
  c500: '#009688',
  c600: '#00897b', // 000
  c700: '#00796b', // fff
  c800: '#00695c',
  c900: '#004d40',
  lightFrom: 700
}

const color_green: ColorDefinition = {
  c050: '#f3fee5',
  c100: '#e2fbbf',
  c200: '#cef993',
  c300: '#bdf569',
  c400: '#b0f14a',
  c500: '#a6ed28',
  c600: '#9dda1d',
  c700: '#90c30c', // 000
  c800: '#84ab00', // fff
  c900: '#708300',
  lightFrom: 901
}

const color_yellow: ColorDefinition = {
  c050: '#fffde7',
  c100: '#fff9c4',
  c200: '#fff59d',
  c300: '#fff176',
  c400: '#ffee58',
  c500: '#ffeb3b',
  c600: '#fdd835',
  c700: '#fbc02d',
  c800: '#f9a825',
  c900: '#f57f17', // 000
  lightFrom: 901
}

const color_orange: ColorDefinition = {
  c050: '#fbe9e7',
  c100: '#ffccbc',
  c200: '#ffab91',
  c300: '#ff8a65',
  c400: '#ff7043',
  c500: '#ff5722',
  c600: '#f4511e',
  c700: '#e64a19',
  c800: '#d84315', // 000
  c900: '#bf360c', // fff
  lightFrom: 900
}

const color_gray: ColorDefinition = {
  c050: '#fafafa',
  c100: '#f5f5f5',
  c200: '#eeeeee',
  c300: '#e0e0e0',
  c400: '#bdbdbd',
  c500: '#9e9e9e', // 000
  c600: '#757575', // fff
  c700: '#616161',
  c800: '#424242',
  c900: '#212121',
  lightFrom: 600
}

const color_black: ColorDefinition = {
  c050: '#383838',
  c100: '#363636',
  c200: '#333333',
  c300: '#2e2e2e',
  c400: '#2c2c2c',
  c500: '#272727',
  c600: '#252525',
  c700: '#232323',
  c800: '#1e1e1e',
  c900: '#121212',
  lightFrom: 0
}

const color: ColorGroup = {
  red: color_red,
  pink: color_pink,
  purple: color_purple,
  blue: color_blue,
  teal: color_teal,
  green: color_green,
  yellow: color_yellow,
  orange: color_orange,
  gray: color_gray,
  black: color_black
}

const layer = {
  base: 10,
  flat: 20,
  raised: 30,
  hovering: 40,
  elevated: 50,
  floating: 60,
  overlay: 70,
  overlayed: 80,
  modal: 90,
  sticky: 100,
  fixed: 110,
  absolute: 120,
  offscreen: 130,
  alwaysOnTop: 210
}

// Hover states are  one shade lighter on dark background, and one shade darker on light background.
const color_semantic = {
  elevation: {
    e00: { bg: color.black.c050 },
    e01: { bg: color.black.c100 },
    e02: { bg: color.black.c200 },
    e03: { bg: color.black.c300 },
    e04: { bg: color.black.c400 },
    e05: { bg: color.black.c500 },
    e06: { bg: color.black.c600 },
    e07: { bg: color.black.c700 },
    e08: { bg: color.black.c800 },
    e09: { bg: color.black.c900 }
  },
  text: {
    body: {
      default: { bg: color.black.c900 },
      subdued: { bg: color.black.c600 },
      link: { bg: color.blue.c500 }
    }
  },
  primary: {
    disabled: {
      value: color.purple.c100,
      inverse: color.gray.c900
    },
    disabledPressed: {
      value: color.purple.c200,
      inverse: color.gray.c900
    },
    hover: {
      value: color.purple.c300,
      inverse: color.gray.c900
    },
    normal: {
      value: color.purple.c400,
      inverse: color.gray.c100
    },
    active: {
      value: color.purple.c500,
      inverse: color.gray.c100
    }
  },
  secondary: {
    disabled: {
      value: color.teal.c100,
      inverse: color.gray.c900
    },
    disabledPressed: {
      value: color.teal.c200,
      inverse: color.gray.c900
    },
    hover: {
      value: color.teal.c300,
      inverse: color.gray.c900
    },
    normal: {
      value: color.teal.c400,
      inverse: color.gray.c900
    },
    active: {
      value: color.teal.c500,
      inverse: color.gray.c900
    }
  },
  action: {
    primary: {
      disabled: color.purple.c100,
      default: color.purple.c200,
      hover: color.purple.c300,
      active: color.purple.c400
    },
    neutral: {
      disabled: color.gray.c100,
      default: color.gray.c200,
      hover: color.gray.c300,
      active: color.gray.c400
    },
    negative: {
      disabled: color.gray.c100,
      default: color.gray.c200,
      hover: color.gray.c300,
      active: color.gray.c400
    }
  },
  status: {
    error: {
      disabled: color.red.c100,
      default: color.red.c200,
      hover: color.red.c300,
      active: color.red.c400
    },
    warning: {
      disabled: color.orange.c100,
      default: color.orange.c200,
      hover: color.orange.c300,
      active: color.orange.c400
    },
    success: {
      disabled: color.green.c100,
      default: color.green.c200,
      hover: color.green.c300,
      active: color.green.c400
    },
    info: {
      disabled: color.blue.c100,
      default: color.blue.c200,
      hover: color.blue.c300,
      active: color.blue.c400
    }
  }
}

const border = {
  width: {
    thin: '1px',
    thick: '2px'
  },
  radius: {
    small: '0.2rem',
    medium: '0.4rem',
    large: '0.6rem'
  }
}

const shadow = {
  light: `${color.black.c900}40`,
  medium: `${color.black.c900}80`,
  dark: `${color.black.c900}bf`
}

const spacing = {
  xxsmall: '0.8rem',
  xsmall: '1.6rem',
  small: '2.4rem',
  medium: '3.2rem',
  large: '4.0rem',
  xlarge: '4.8rem',
  xxlarge: '5.6rem'
}

const misc = {
  overlay: `${color.black.c900}40`
}

export default {
  border,
  color: color_semantic,
  font,
  grid,
  layer,
  misc,
  shadow,
  spacing
}
