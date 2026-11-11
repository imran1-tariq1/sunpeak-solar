import usePageTitle from '../hooks/usePageTitle';
import { company } from '../data/site';
import { PageHeader } from '../components/Common';

const content = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information we collect', `When you request a quote or contact ${company.name}, we collect the details you provide, such as your name, phone number, email address, city, property type and electricity usage. We may also collect basic, anonymous website usage data to improve our services.`],
      ['How we use your information', 'We use your information to respond to enquiries, prepare quotes, schedule site surveys, deliver and support your solar system, and, with your consent, send occasional updates and offers.'],
      ['Sharing your information', 'We never sell your personal data. We share it only with trusted partners where necessary to deliver your service, such as financing banks (with your permission) or utility companies for net metering applications.'],
      ['Data security', 'We take reasonable technical and organisational measures to protect your information against unauthorised access, loss or misuse.'],
      ['Your rights', `You may request access to, correction of, or deletion of your personal data at any time by emailing ${company.email}.`],
      ['Updates', 'We may update this policy from time to time. The latest version will always be available on this page.'],
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      ['Use of this website', `This website is provided by ${company.name} for general information about our products and services. By using it, you agree to these terms.`],
      ['Prices and estimates', 'All prices, savings estimates and calculator results on this website are indicative only. Final pricing and system design are confirmed in a written quotation following a site survey.'],
      ['Quotations and orders', 'A quotation is valid for the period stated on it. Orders are confirmed only upon signing of a written agreement and receipt of the agreed advance payment.'],
      ['Warranties', 'Manufacturer warranties apply to equipment as specified by each manufacturer. Our workmanship warranty is detailed in your installation agreement.'],
      ['Limitation of liability', `${company.name} is not liable for any indirect or consequential loss arising from use of this website or reliance on its estimates.`],
      ['Contact', `Questions about these terms can be sent to ${company.email}.`],
    ],
  },
};

export default function Legal({ type }) {
  const page = content[type];
  usePageTitle(page.title);
  return (
    <>
      <PageHeader title={page.title} text="Last updated: November 2026" />
      <section className="section">
        <div className="container container--narrow prose">
          {page.sections.map(([h, p]) => (
            <div key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
