import React, { useState, useEffect } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    if (editIndex !== null) {
      // Update existing contact
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = { name, email };
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      // Add new contact
      setContacts([...contacts, { name, email }]);
    }

    setName("");
    setEmail("");
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleEdit = (index) => {
    setName(contacts[index].name);
    setEmail(contacts[index].email);
    setEditIndex(index);
  };

  return (
    <div className="contact-container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <h2>Saved Contacts:</h2>
      <div className="contacts-grid">
        {contacts.map((c, i) => (
          <div className="contact-card" key={i}>
            <h3>{c.name}</h3>
            <p>{c.email}</p>
            <div className="card-buttons">
              <button className="edit-btn" onClick={() => handleEdit(i)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(i)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
