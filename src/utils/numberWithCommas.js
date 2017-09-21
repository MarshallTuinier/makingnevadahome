const numberWithCommas = number => {
  // The Regex below searches for one positive assertion for three consecutive digits, and adds a comma,
  // with a negative assertion for exactly three consecutive digits to remove the issue of ',XXX'
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default numberWithCommas;
