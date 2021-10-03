export default function swichPhoneNumber(PhoneNumber) {
  const newNumber = PhoneNumber.replace(/(\s|-|\(|\))/g, '').replace(/^(7|86)/, '+$&').replace(/^8\d{10}$/, (str) => str.replace(/^8/, '+7'));
  // let newNumber = PhoneNumber.replace(/(\s|-|\(|\))/g, '');
  // newNumber = newNumber.replace(/^(7|86)/, '+$&');
  // newNumber = newNumber.replace(/^8\d{10}$/, (str) => str.replace(/^8/, '+7'));

  return newNumber;
}
