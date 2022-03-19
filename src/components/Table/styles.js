export const wrapperHead = {
  th: {
    minWidth: '140px',
  },

  '@media (max-width: 750px)': {
    display: 'flex',
    flexDirection: 'column',

    borderBottom: '2px solid gray',

    th: {
      paddingY: '20px',
    },
  },
};

export const wrapperBody = {
  transition: 'background 0.5s',
  _hover: { backgroundColor: 'gray.100' },

  '@media (max-width: 750px)': {
    display: 'flex',
    flexDirection: 'column',

    borderBottom: '2px solid gray',
  },
};

export const textStyle = {
  marginLeft: '5px',
};

export const buttonStyle = {
  margin: '20px auto',
};

export const boxStyle = {
  width: '100%',
};
