tailwind.config = {
    theme: {
      extend: {
        gridTemplateColumns: {
          'photo': 'repeat(auto-fit, minmax(280px, 1fr))',
          'video': 'repeat(auto-fill, minmax(374px, 1fr))',
        }
      },
      container: {
        padding: {
          DEFAULT: '16px',
          md: '40px',
          xl: '0px'
        },
      }
    },
  };