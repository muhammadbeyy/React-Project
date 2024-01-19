import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="section about-section">
        <h1 className="section-title">about us</h1>
        <p className="section-info">
          Welcome to IslamBey.com, a platform dedicated to sharing the beauty
          and wisdom of Islam with the world. Our mission is to provide
          authentic Islamic teachings, resources, and inspiration to individuals
          seeking knowledge and guidance on their spiritual journey.
        </p>

        <h1 className="section-title">Our Mission</h1>
        <p className="section-info">
          At IslamBey.com, we are committed to promoting understanding,
          tolerance, and unity through the teachings of Islam. Our content is
          rooted in the principles of compassion, justice, and respect for all,
          reflecting the true essence of the Islamic faith.
        </p>

        <h1 className="section-title">Meet our team</h1>
        <p className="section-info">
          Our dedicated team of scholars, educators, and content creators work
          tirelessly to curate and produce valuable resources for our audience.
          With diverse expertise and a shared passion for Islamic knowledge, we
          strive to deliver content that is informative, engaging, and relevant
          to contemporary issues.
        </p>

        <h1 className="section-title">What we offer</h1>
        <p className="section-info">
          Explore a wealth of articles, videos, lectures, and interactive
          materials that cover various aspects of Islamic faith, history,
          culture, and contemporary issues. Whether you are a lifelong
          practitioner or new to Islam, our platform aims to serve as a source
          of enlightenment and enrichment for all.
        </p>

        <h1 className="section-title">Get in touch</h1>
        <p className="section-info">
          We value your feedback and input. If you have any questions,
          suggestions, or inquiries, please feel free to reach out to us at
          muhammadshittabey@gmail.com. Connect with us on all social-media
          platforms to join our community and stay updated on our latest content
          and initiatives. Thank you for being a part of our journey towards
          knowledge, understanding, and spiritual growth in Islam.
        </p>
      </section>
      <button className="button">
        <Link
          className="link-button"
          to="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to the top
        </Link>
      </button>
    </>
  );
};

export default About;
