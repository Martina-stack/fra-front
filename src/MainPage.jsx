import React, { useState } from "react";
import './main-page.css';
import { Users, Map, Home, Shield, Lock, Database, Landmark, Cpu, Globe, Satellite, Leaf, ChevronDown, Languages } from 'lucide-react';

export default function MainPage() {
  // Accordion state for Rights section
  const [openIndex, setOpenIndex] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  const rights = [
    {
      title: "Individual Forest Rights (IFR)",
      desc: "IFR grants rights to individuals or families for land they have been cultivating before December 13, 2005. This includes the right to hold and live in the forest land for habitation or for self-cultivation for livelihood. The right is heritable but not alienable or transferable.",
    },
    {
      title: "Community Rights (CR)",
      desc: "CRs are for the community and include rights over nistar or by whatever name called, including those used in erstwhile Princely states, Zamindari or such intermediary regimes. It also covers rights over minor forest produce, grazing areas, pastoralist routes, water bodies, and traditional fishing grounds.",
    },
    {
      title: "Community Forest Resource (CFR) Rights",
      desc: "CFR rights empower Gram Sabhas to conserve, protect, and manage their community forest resources which they have been traditionally protecting and conserving for sustainable use. This is a significant step towards decentralized forest governance.",
    },
  ];

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <header className="navbar">
        <div className="nav-left">
          <span className="logo-text">
            <Leaf size={28} color="#22c55e" style={{ marginRight: 10, verticalAlign: "middle" }} />
            Van Mitra
          </span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#milestones">Milestones</a>
          <a href="#rights">Rights</a>
          <a href="#trust">Trust</a>
        </nav>
        <div className="nav-buttons">
          <button className="btn btn-light">Login</button>
          <button className="btn btn-green">Register</button>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="section-title">Van Mitra</h1>
          <p className="section-text">
            Empowering tribal communities by digitizing and visualizing forest
            rights and assets under the Forest Rights Act, 2006.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-green">Get Started →</button>
            <button className="btn btn-light">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="public/image.png" alt="Hero" />
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section id="about" className="features">
        <div className="feature-card">
          <div className="feature-icon-box">
            <Cpu size={24} color="#22c55e" />
          </div>
          AI Document Digitization
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <Satellite size={24} color="#22c55e" />
          </div>
          Satellite Mapping
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <Globe size={24} color="#22c55e" />
          </div>
          WebGIS Platform
        </div>
        <div className="feature-card">
          <div className="feature-icon-box">
            <Database size={24} color="#22c55e" />
          </div>
          Decision Support System (DSS)
        </div>
      </section>

      {/* ---------- MILESTONES ---------- */}
      <section id="milestones" className="milestones">
        <h2 className="section-title">Our Journey &amp; Milestones</h2>
        <p className="section-text">
          Following a structured path to build a comprehensive digital ecosystem
          for forest rights.
        </p>

        <div className="milestone-step">
          <div className="icon-green"><Users size={20} /></div>
          <h3>Digital Archive Creation</h3>
          <p>
            Establishing a secure, searchable digital repository of all
            FRA-related documents. This foundational step ensures data
            preservation and accessibility for future stages.
          </p>
          <span className="tag">Target User: Ministry of Tribal Affairs</span>
        </div>

        <div className="milestone-step">
          <div className="icon-green"><Map size={20} /></div>
          <h3>WebGIS Atlas Development</h3>
          <p>
            Launching an interactive WebGIS atlas that visualizes digitized land
            claims and forest boundaries, providing a clear geographic context
            for all stakeholders.
          </p>
          <span className="tag">Target User: District/Line Departments</span>
        </div>

        <div className="milestone-step">
          <div className="icon-green"><Home size={20} /></div>
          <h3>Community Asset Mapping</h3>
          <p>
            Engaging with communities to map local assets and resources,
            layering this vital information onto the WebGIS atlas to guide
            development planning.
          </p>
          <span className="tag">Target User: FRA Patta Holders</span>
        </div>

        <div className="milestone-step">
          <div className="icon-green"><Shield size={20} /></div>
          <h3>DSS Engine Implementation</h3>
          <p>
            Deploying a Decision Support System (DSS) to analyze data and
            recommend eligible government schemes for beneficiaries, promoting
            economic convergence.
          </p>
          <span className="tag">Target User: NGOs and Field Staff</span>
        </div>
      </section>

      {/* ---------- RIGHTS (Accordion) ---------- */}
      <section id="rights" className="rights">
        <h2 className="section-title">Understanding Forest Rights</h2>
        <p className="section-text">
          A quick overview of the key rights granted under the Forest Rights Act, 2006.
        </p>
        <div className="rights-box">
          {rights.map((item, idx) => (
            <div
              className="right-card"
              key={item.title}
              aria-expanded={openIndex === idx}
            >
              <button
                className="right-accordion-btn"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="right-icon">
                  <Landmark size={28} color="#eab308" style={{ marginRight: 0 }} />
                </span>
                <span className="right-title" style={{ flex: 1 }}>{item.title}</span>
                <ChevronDown
                  size={24}
                  style={{
                    transition: "transform 0.2s",
                    transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)"
                  }}
                  color="#eab308"
                />
              </button>
              <div className={`right-desc${openIndex === idx ? " open" : ""}`}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TRUST ---------- */}
      <section id="trust" className="trust">
        <h2 className="section-title">Our Commitment to Trust</h2>
        <p className="section-text">
          Built on a foundation of transparency, inclusivity, and data privacy to
          serve every stakeholder with integrity.
        </p>

        <div className="trust-cards">
          <div className="trust-card">
            <div className="icon-yellow">
              <Users size={32} color="#eab308" />
            </div>
            <h3>Radical Inclusivity</h3>
            <p>
              Our platform is designed to be accessible and usable by everyone, from tribal community members to government officials. We prioritize simple language, intuitive interfaces, and multi-lingual support to ensure no one is left behind.
            </p>
          </div>
          <div className="trust-card">
            <div className="icon-yellow">
              <Lock size={32} color="#eab308" />
            </div>
            <h3>Data Privacy &amp; Security</h3>
            <p>
              We treat the data of our users with the utmost respect and security. All personal and community data is encrypted, stored securely, and handled in accordance with strict privacy policies to protect the rights and identities of all individuals.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        © 2025 Ministry of Tribal Affairs, Government of India.
      </footer>

      {/* ---------- CHAT WIDGET ---------- */}
      <div className="chat-widget">
        {!chatOpen && (
          <button className="chat-fab" onClick={() => setChatOpen(true)}>
            <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="12" rx="2" />
              <path d="M8 20h8" />
            </svg>
          </button>
        )}
        {chatOpen && (
          <div className="chat-popup">
            <div className="chat-popup-header">
              <span>
                <span style={{marginRight: 8, verticalAlign: "middle"}}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
                </span>
                <span style={{fontWeight: 700, fontSize: "1.25rem", fontFamily: '"Times New Roman", serif'}}>Chat with our Assistant</span>
              </span>
              <button className="chat-popup-close" onClick={() => setChatOpen(false)}>×</button>
            </div>
            <div className="chat-popup-tabs">
              <button className="chat-popup-tab active">
                FRA Rights
              </button>
              <button className="chat-popup-tab active">Claim Submission</button>
              <button className="chat-popup-tab active">Asset Maps & Schemes</button>
            </div>
            <div className="chat-popup-body">
              <div className="chat-language-select">
                <div className="chat-language-icon">
                  <Languages size={32} color="#22c55e" />
                </div>
                <h3 className="chat-language-title">Select your language</h3>
                <div className="chat-language-options">
                  <button className="chat-lang-btn">English</button>
                  <button className="chat-lang-btn">हिन्दी</button>
                  <button className="chat-lang-btn">ଓଡ଼ିଆ</button>
                </div>
              </div>
            </div>
            <div className="chat-popup-footer">
            </div>
          </div>
        )}
      </div>
    </>
  );
}