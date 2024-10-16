import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-4">Last updated: October 15, 2024</p>
      
      <Section title="Introduction">
        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
        <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
      </Section>

      <Section title="Interpretation and Definitions">
        <SubSection title="Interpretation">
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        </SubSection>
        <SubSection title="Definitions">
          <p>For the purposes of this Privacy Policy:</p>
          <DefinitionList definitions={definitions} />
        </SubSection>
      </Section>

      <Section title="Collecting and Using Your Personal Data">
        <SubSection title="Types of Data Collected">
          <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
          <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Usage Data</li>
          </ul>
          
          <h4 className="text-lg font-semibold mb-2">Usage Data</h4>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
          {/* Add more subsections for Information from Third-Party Social Media Services, Information Collected while Using the Application, etc. */}
        </SubSection>
        
        <SubSection title="Use of Your Personal Data">
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
            <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
            {/* Add more list items */}
          </ul>
        </SubSection>
        
        {/* Add more subsections for Retention of Your Personal Data, Transfer of Your Personal Data, etc. */}
      </Section>

      {/* Add more sections for Children's Privacy, Links to Other Websites, Changes to this Privacy Policy, etc. */}

      <Section title="Contact Us">
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>By email: info@ygsd.in</li>
          <li>By visiting this page on our website: <a href="https://ygsd.in/contact-us" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ygsd.in/contact-us</a></li>
          <li>By phone number: +919060924752</li>
        </ul>
      </Section>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const DefinitionList = ({ definitions }: { definitions: { term: string; description: string }[] }) => (
  <ul className="list-disc pl-6 mb-4">
    {definitions.map((def, index) => (
      <li key={index} className="mb-2">
        <strong>{def.term}:</strong> {def.description}
      </li>
    ))}
  </ul>
);

const definitions = [
  { term: 'Account', description: 'A unique account created for You to access our Service or parts of our Service.' },
  { term: 'Affiliate', description: 'An entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
  // Add more definitions
];

export default PrivacyPolicy;

