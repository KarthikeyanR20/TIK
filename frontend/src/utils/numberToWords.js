const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

function convertBelowThousand(num) {
  let result = "";

  if (num >= 100) {
    result += ones[Math.floor(num / 100)] + " Hundred ";
    num %= 100;
  }

  if (num >= 20) {
    result += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 0) {
    result += ones[num] + " ";
  }

  return result.trim();
}

export const numberToWords = (amount) => {
  amount = parseInt(amount);

  if (isNaN(amount) || amount === 0) {
    return "Zero Only";
  }

  let words = "";

  const crore = Math.floor(amount / 10000000);
  amount %= 10000000;

  const lakh = Math.floor(amount / 100000);
  amount %= 100000;

  const thousand = Math.floor(amount / 1000);
  amount %= 1000;

  const hundred = amount;

  if (crore) {
    words += convertBelowThousand(crore) + " Crore ";
  }

  if (lakh) {
    words += convertBelowThousand(lakh) + " Lakh ";
  }

  if (thousand) {
    words += convertBelowThousand(thousand) + " Thousand ";
  }

  if (hundred) {
    words += convertBelowThousand(hundred);
  }

  return words.trim() + " Only";
};