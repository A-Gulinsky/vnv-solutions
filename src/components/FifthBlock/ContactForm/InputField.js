
export const NameOptions = {
  required: `Required field`,
  pattern: {
    value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    message: `Incorrect format`
  },
  maxLength: {
    value: 15,
    message: 'Max 15 length'
  },
}

export const NumberOptions = {
  required: 'Required field',
  pattern: {
    message: `Incorrect format`
  },
  maxLength: {
    value: 10,
    message: 'Max 10 length'
  },
}