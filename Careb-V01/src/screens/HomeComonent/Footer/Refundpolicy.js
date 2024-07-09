import React from "react";
import './RefundPolicy.css';

function RefundPolicy() {
  return (
    <div className="Refund-policy-container">
      <h1>Refund Policy</h1>
      <p>
        At Caribbeaneaze, we value our customers and aim to provide the best
        service possible. However, if you are not satisfied with your purchase,
        we offer a refund policy to ensure your satisfaction.
      </p>
      <div className="intro">

      <h2>1. Eligibility for Refunds</h2>
      <p>To be eligible for a refund, please ensure that:</p>
      <ul>
        <li>The product or service was purchased in the last 30 days</li>
        <li>
          The product is in its original packaging and in the same condition as
          when you received it
        </li>
        <li>The receipt or proof of purchase is available</li>
      </ul>
</div>
<div className="intro">

      <h2>2. Non-refundable Items</h2>
      <p>The following items are non-refundable:</p>
      <ul>
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Some health and personal care items</li>
      </ul>
</div>
<div className="intro">

      <h2>3. Refund Process</h2>
      <p>
        To initiate a refund, please contact our support team at <a href="mailto:support@caribbeaneaze.com">support@caribbeaneaze.com</a> with your order details and reason for the
        refund request. Once your request is received and inspected, we will
        notify you of the approval or rejection of your refund.
      </p>
</div>
<div className="intro">

      <h2>4. Approved Refunds</h2>
      <p>
        If your refund is approved, a credit will be applied to your original
        method of payment within a certain number of days, depending on your
        payment provider.
      </p>
</div>
<div className="intro">

      <h2>5. Late or Missing Refunds</h2>
      <p>
        If you haven’t received a refund yet, first check your bank account
        again. Then contact your credit card company, it may take some time
        before your refund is officially posted. Next contact your bank. There
        is often some processing time before a refund is posted. If you’ve done
        all of this and you still have not received your refund, please contact
        us at <a href="mailto:support@caribbeaneaze.com">support@caribbeaneaze.com</a>
      </p>
      </div>
    </div>
  );
}

export default RefundPolicy;
