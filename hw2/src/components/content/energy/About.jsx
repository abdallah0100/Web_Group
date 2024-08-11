import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">About Us</h1>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Welcome to Our Platform!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            We are dedicated to transforming complex data into interactive and insightful visualizations. Our platform allows users to create dynamic, easy-to-understand infographics that simplify data analysis and storytelling. Whether you are a data scientist, a business analyst, or just someone passionate about data, we have the tools to help you make the most of your information.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Key Features</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
            <li><strong>Intuitive Interface:</strong> Drag-and-drop functionality for seamless design.</li>
            <li><strong>Customizable Layouts:</strong> Tailor your infographics to meet your specific needs.</li>
            <li><strong>Various Graph Types:</strong> Choose from a wide range of graph types and styles.</li>
            <li><strong>Real-Time Collaboration:</strong> Work together with your team in real-time.</li>
            <li><strong>Download & Share:</strong> Save your work and share it easily with others.</li>
          </ul>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            Our mission is to democratize data visualization. We believe that everyone should have access to tools that can help them understand and communicate their data effectively. By providing an easy-to-use platform, we aim to empower individuals and organizations to turn data into compelling stories and actionable insights.
          </p>
        </section>

        {/* Our Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            Founded in 2024, our team consists of passionate professionals with expertise in data analysis, graphic design, and web development. We come from diverse backgrounds and work together to create innovative solutions for data visualization. Our commitment to excellence and customer satisfaction drives us to continuously improve and expand our offerings.
          </p>
        </section>

        {/* Contact Information */}
        <section className="pt-6 rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p>
            Have questions or feedback? Reach out to us through the following channels:
          </p>
          <ul className="list-disc pl-5">
            <li><strong>Address:</strong> 94 Broadway St, Tel Aviv, 61000, Israel</li>
            <li><strong>Phone:</strong> 234-9876-5400</li>
            <li><strong>Email:</strong> <a href="mailto:energy@gmail.com" className="text-blue-500 hover:underline">energy@gmail.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
