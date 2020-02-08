const dateFormatter = unformattedDate => {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let date = new Date(unformattedDate);
  let dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  let formattedDate = dateTimeFormat.format(date);

  return formattedDate;
};

export default dateFormatter;
