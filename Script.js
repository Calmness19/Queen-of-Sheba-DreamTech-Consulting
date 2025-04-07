contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent!");
        this.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
  