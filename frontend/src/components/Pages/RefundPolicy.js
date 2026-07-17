import React from "react";
import "./Terms.css";

function RefundPolicy() {
  return (
    <div className="terms-page">
      <div className="terms-container">

        <h1>Refund & Cancellation Policy</h1>

        <p className="intro">
          At <strong>TIK HR Consultancy</strong>, we are committed to providing
          high-quality training and placement assistance services. Before making
          any payment, candidates are advised to carefully review this Refund &
          Cancellation Policy.
        </p>

        <section>
          <h2>Training Fees</h2>

          <p>
            Training fees, once paid, are generally <strong>non-refundable</strong>,
            as enrollment reserves a seat, training resources, and faculty time.
          </p>
        </section>

        <section>
          <h2>Placement Assistance</h2>

          <p>
            Placement assistance is a professional support service. Employment
            decisions are made solely by hiring organizations.
          </p>

          <p>
            Fees paid for placement assistance, where applicable, are generally
            <strong> non-refundable</strong> once the agreed services have
            commenced.
          </p>
        </section>

        <section>
          <h2>Exceptional Circumstances</h2>

          <p>
            Refund requests may be considered at the sole discretion of
            TIK HR Consultancy in the following situations:
          </p>

          <ul>
            <li>Duplicate payment due to a technical error.</li>
            <li>Payment processed more than once for the same service.</li>
            <li>
              A training program or service cancelled by TIK HR Consultancy
              before commencement.
            </li>
          </ul>

          <p>
            Approved refunds, if applicable, will be processed to the original
            payment method within <strong>7–14 business days</strong>.
          </p>
        </section>

        <section>
          <h2>Cancellation by Candidate</h2>

          <p>
            Candidates who choose not to continue after enrollment may
            discontinue participation at any time.
          </p>

          <p>
            However, fees already paid are generally
            <strong> non-refundable</strong> unless otherwise agreed in writing
            by TIK HR Consultancy.
          </p>
        </section>

      </div>
    </div>
  );
}

export default RefundPolicy;