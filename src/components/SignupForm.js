import React from "react";

const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from refreshing the page

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data Submitted:", data);
    alert("Thank you for joining! We'll contact you soon.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
