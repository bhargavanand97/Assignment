import React, { useState } from "react";

function Contact() {
  const [val, setVal] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Here is the text you entered ${val}`)
  }
  return (
    <div>
      <h3> Contact Page </h3>
      <form onSubmit={handleSubmit} className="submit-details-form">
        <label>
          Frirst Name:
        <input
            type="text"
            value={val}
            onChange={e => setVal(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>

  );
}

export default Contact;