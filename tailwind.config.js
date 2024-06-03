module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        // Add custom height utility
        '8p': '8%', 
        '10p': '10%', 
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '82p': '82%', 
        '90p': '90%',
        '100p': '100%',
      },
      width: {
        // Add custom height utility
        '8p': '8%', 
        '10p': '10%', 
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '92p': '92%', 
        '100p': '100%',
      },
      colors: {
        primary: '#B10C37',
        complementary: '#0CB14B',
        analogous1: '#B12C0C',
        analogous2: '#B10C6F',
        triadic1: '#0C37B1',
        triadic2: '#37B10C',
        monochromatic1: '#D11F5B',
        monochromatic2: '#8C0929',
        tetradic1: '#B10C37',
        tetradic2: '#0CB14B',
        tetradic3: '#B17F0C',
        tetradic4: '#0C37B1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
