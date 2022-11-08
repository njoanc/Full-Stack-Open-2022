import React from "react";

const PersonForm = ({
  onFormSubmit,
  onNameChange,
  onPhoneChange,
  name,
  phone,
}) => {
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          Name: <input type="text" value={name} onChange={onNameChange} />
          <br />
          <br />
          Phone: <input type="text" value={phone} onChange={onPhoneChange} />
          <br />
          <br />
          <button type="submit">Add </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
