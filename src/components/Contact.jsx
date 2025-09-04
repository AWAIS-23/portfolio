import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // prevent double submit
    const formEl = e.currentTarget; // cache before async
    const fd = new FormData(formEl);
    const payload = {
      name: fd.get("name") || "",
      email: fd.get("user_email") || "",
      subject: fd.get("subject") || "",
      message: fd.get("message") || "",
    };

    try {
      setIsSending(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed with ${res.status}`);
      }
      toast.success("Message sent successfully!");
      if (formEl && typeof formEl.reset === "function") formEl.reset();
    } catch (err) {
      console.error("Contact send failed:", err);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <form id="myForm" className="contactform" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" placeholder="YOUR NAME" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="YOUR EMAIL"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button" disabled={isSending} aria-busy={isSending}>
              <span className="button-text">{isSending ? "Sending..." : "Send Message"}</span>
              <span className={`button-icon fa ${isSending ? "fa-spinner fa-spin" : "fa-send"}`}></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
