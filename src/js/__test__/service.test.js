import swichPhoneNumber from '../service';

test.each([
  ['8 (927) 000-08-00', '+79270000800'],
  ['+7 960 000 00 00', '+79600000000'],
  ['7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['86 000 000 0000', '+860000000000'],
])(
  'Test phone number optimization',
  (phoneNumber, expected) => {
    expect(swichPhoneNumber(phoneNumber)).toBe(expected);
  },
);
