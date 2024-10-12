module.exports = {
  theme: {
    extend: {
      colors: {
        msblue: '#0078D4',
        mslight: '#50E6FF',
        msdark: '#005A9E',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  content: ['./**/*.html'], // Ensure this line includes the correct file paths
  plugins: [], // You can add plugins here if needed
};
