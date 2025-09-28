import React from "react";
import './About.css'
import Navbar from '../../components/Navbar/Navbar'

export default function About() {
  return (
    <>
    <Navbar />
    <div className="container py-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-primary">About Our CMS</h1>
        <p className="lead text-muted mt-3">
          A modern, user-friendly platform to easily <strong>create, manage, and share content</strong>.
        </p>
      </div>

      {/* Row Layout */}
      <div className="row g-4">
        {/* Key Features */}
        <div className="col-md-6">
          <div className="box card shadow-sm border-1 border-light h-100 me-2">
            <div className="card-body">
              <h3 className="card-title mb-3">🌟 Key Features</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✅ <strong>Easy Publishing</strong> – Write, edit, and publish posts with an intuitive editor.</li>
                <li className="mb-2">✅ <strong>User Roles & Permissions</strong> – Manage admins, authors, and readers.</li>
                <li className="mb-2">✅ <strong>Category & Tag Management</strong> – Organize content for discoverability.</li>
                <li className="mb-2">✅ <strong>Search & Filtering</strong> – Find articles by title, author, or category.</li>
                <li className="mb-2">✅ <strong>Responsive Design</strong> – Optimized for all devices.</li>
                <li>✅ <strong>Secure Access</strong> – Protected login system.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who Can Use It */}
        <div className="col-md-6">
          <div className="box card shadow-sm border-1 border-light h-100 me-2">
            <div className="card-body">
              <h3 className="card-title mb-3">👥 Who Can Use It?</h3>
              <ul className="list-unstyled">
                <li className="mb-2">👨‍💼 <strong>Admins</strong> – Manage users, categories, and site settings.</li>
                <li className="mb-2">✍️ <strong>Authors</strong> – Write and publish articles with ease.</li>
                <li>📖 <strong>Readers</strong> – Explore and engage with content effortlessly.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Goal */}
      <div className="card shadow-sm border-0 mt-5">
        <div className="card-body">
          <h3 className="card-title mb-3">🚀 Our Goal</h3>
          <p className="card-text text-muted">
            We built this CMS to empower individuals, teams, and organizations to{" "}
            <strong>focus on content, not complexity</strong>. With clean design, powerful features, 
            and smooth workflows, managing blogs and articles has never been easier.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
