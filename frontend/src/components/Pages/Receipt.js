import React, { useState, useRef } from "react";
import "./Receipt.css";

import { numberToWords } from "../../utils/numberToWords";
import { generateReceiptNo } from "../../utils/receiptNumber";

import ReceiptPreview from "../Pages/ReceiptPreview"

const Receipt = () => {
  const printRef = useRef();

  const [formData, setFormData] = useState({
    receiptNo: generateReceiptNo(),
    date: new Date().toISOString().substring(0, 10),
    receiver: "",
    amount: "",
    paymentMode: "Bank Transfer",
    purpose: "Training & Placement Service",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrint = () => {
    window.print(ReceiptPreview);
  };

  const resetForm = () => {
    setFormData({
      receiptNo: generateReceiptNo(),
      date: new Date().toISOString().substring(0, 10),
      receiver: "",
      amount: "",
      paymentMode: "Bank Transfer",
      purpose: "Training & Placement Service",
      remarks: "",
    });
  };

  return (
    <div className="receipt-page">

      <div className="receipt-form">

        <h2>TIK HR Consultancy</h2>

        <h3>Receipt Generator</h3>

        <div className="form-group">
          <label>Receiver Name</label>
          <input
            type="text"
            name="receiver"
            value={formData.receiver}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Payment Mode</label>

          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Cheque</option>
          </select>

        </div>

        <div className="form-group">
          <label>Remarks</label>

          <textarea
            rows="4"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />

        </div>

        <div className="button-group">

          <button onClick={handlePrint}>
            Print Receipt
          </button>

          <button onClick={resetForm}>
            New Receipt
          </button>

        </div>

      </div>

      <div ref={printRef}>

        <ReceiptPreview
          formData={formData}
          amountWords={numberToWords(formData.amount)}
        />

      </div>

    </div>
  );
};

export default Receipt;