export const generateReceiptNo = () => {
  const today = new Date();

  const year = today.getFullYear();

  const month = String(today.getMonth() + 1).padStart(2, "0");

  const last = localStorage.getItem("receiptCount");

  const count = last ? Number(last) + 1 : 1;

  localStorage.setItem("receiptCount", count);

  return `TIK/${year}/${month}/${String(count).padStart(3, "0")}`;
};