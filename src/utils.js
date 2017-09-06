import uuidv4 from 'uuid/v4';

export const clipy = (val) => {
  let textfield = document.createElement('textarea');
  textfield.innerHTML = val;
  document.body.appendChild(textfield);
  textfield.select();
  document.execCommand('copy');
  textfield.remove();
};

export const generateGuids = () => {
  let guids = [];
  for (let i = 0; i < 10; i++)
    guids.push(uuidv4());
  return guids;
};

export default {};
