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
  size: {
    xsmall: '1.2rem',
    small: '1.4rem',
    c400: '1.6rem',
    large: '1.8rem',
    xlarge: '2.0rem',
    xxlarge: '2.8rem'
  },
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
  c050: '#121212',
  c100: '#1e1e1e',
  c200: '#232323',
  c300: '#252525',
  c400: '#272727',
  c500: '#2c2c2c',
  c600: '#2e2e2e',
  c700: '#333333',
  c800: '#363636',
  c900: '#383838',
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

export default {
  font,
  grid
}
