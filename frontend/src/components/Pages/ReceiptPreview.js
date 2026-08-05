import React from "react";
import logo from "../../assets/logo.png";
import signature from "../../assets/signature.png";
import seal from "../../assets/seal.png";

const ReceiptPreview = ({ formData, amountWords }) => {
  return (
    <div className="receipt-container">

      {/* Header */}
      <div className="receipt-header">

        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="company-details">
          <p>
            242/5, Rohini Flats,
            <br />
            Anna Nagar West Extension,
            <br />
            Chennai – 600101
          </p>

          <p>
            <strong>GSTIN :</strong> 33AAVPI5142A1Z0
          </p>
        </div>

      </div>

      <hr />

      {/* Receipt Details */}

      <div className="receipt-top">

        <p>
          <strong>Receipt No :</strong> {formData.receiptNo}
        </p>

        <p>
          <strong>Date :</strong> {formData.date}
        </p>

      </div>

      {/* Table */}

      <table className="receipt-table">
        <tbody>

          <tr>
            <td>Received From</td>
            <td>{formData.receiver}</td>
          </tr>

          <tr>
            <td>Amount</td>
            <td>₹ {formData.amount}</td>
          </tr>

          <tr>
            <td>Amount in Words</td>
            <td>{amountWords}</td>
          </tr>

          <tr>
            <td>Payment Mode</td>
            <td>{formData.paymentMode}</td>
          </tr>

          <tr>
            <td>Remarks</td>
            <td>{formData.remarks || "-"}</td>
          </tr>

        </tbody>
      </table>

      {/* Signature */}

      <div className="receipt-bottom">

        <div className="signature-wrapper">

          <div>
            <img
              src={seal}
              alt="Seal"
              className="seal"
            />
          </div>
          <div>
            <img
              src={signature}
              alt="Signature"
              className="signature-image"
            />
          </div>

          <h4>Authorized Signatory</h4>

          <p>Indragandhi K</p>

          <p>TIK HR Consultancy</p>

        </div>

      </div>


      <p className="disclaimer">
        This is a system-generated receipt with an authorized e-signature and company seal.
        No physical signature is required.
      </p>

    </div>
  );
};

export default ReceiptPreview;