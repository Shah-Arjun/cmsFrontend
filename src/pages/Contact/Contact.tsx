import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Contact = () => {
  return (
      <>
        <Navbar />
        <div className="container py-5">
          {/* Page Heading */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5 text-primary">Contact Us</h1>
            <p className="lead text-muted mt-3">
              Have questions or need help? We’d love to hear from you.
            </p>
          </div>

          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-md-7">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="card-title mb-3">📩 Send us a message</h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Your Name</label>
                      <input type="text" className="form-control" placeholder="John Doe" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Email</label>
                      <input type="email" className="form-control" placeholder="john@example.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows={5} placeholder="Type your message..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary px-4">Send Message</button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-5">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h3 className="card-title mb-3">📞 Get in touch</h3>
                  <p className="mb-2"><strong>Email:</strong> support@cms.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +977 9800000000</p>
                  <p><strong>Address:</strong> Itahari, Nepal</p>

                  <hr />
                  <h5>Follow Us</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a href="/" className="text-decoration-none text-primary"><i className="bi bi-facebook fs-4"></i></a>
                    <a href="/" className="text-decoration-none text-info"><i className="bi bi-twitter-x fs-4 text-black"></i></a>
                    <a href="/" className="text-decoration-none text-danger"><i className="bi bi-instagram fs-4"></i></a>
                    <a href="/" className="text-decoration-none text-dark"><i className="bi bi-linkedin fs-4 text-primary"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Contact
