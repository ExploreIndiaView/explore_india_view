import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Privacy Policy</h1>
      <p className="mb-6 leading-relaxed">
        At Explore India View, accessible from exploreindiaview.com, one of our main priorities is the privacy of our visitors. 
        This Privacy Policy document contains types of information that is collected and recorded by Explore India View and how we use it.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Log data and usage information</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and maintain our website and services</li>
          <li>To personalize your experience</li>
          <li>To improve our website</li>
          <li>To communicate with you</li>
          <li>To run affiliate marketing programs and track commissions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Third-Party Privacy Policies</h2>
        <p className="leading-relaxed">
          Explore India View's Privacy Policy does not apply to other advertisers or websites. 
          We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Consent</h2>
        <p className="leading-relaxed">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Liabilities & Limitations</h2>
        <p className="mb-4 leading-relaxed">
          Please note that after the finalization of the Tour/ service Cost, if there are any hike in entrance fees of monuments / museums,
          taxes, fuel cost or guide charges – by Govt of India, the same would be charged as extra.
        </p>
        <p className="leading-relaxed">
          We shall not be responsible for any delays, cancellations & alterations in the program or expenses incurred directly or indirectly
          due to natural hazards, flight/train cancellations, accident, breakdown of machinery or equipment, breakdown of transport, weather,
          sickness, landslides, political closures or any untoward incidents.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Privacy Policy (Tour Services)</h2>
        <p className="mb-4 leading-relaxed">
          N Cube Tour (Explore India Tour) values the trust you place in us. This statement discloses the information practices for
          the site, including what type of information is gathered and tracked, how the information is used and with whom the information is shared.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Collection of Personally identifiable information</strong><br/>
          Explore India Tour collects your personal information for site security and to ensure our service remains available to all users.
          The personal information we collect from you will include the following:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Name of the user</li>
          <li>Contact information including email address</li>
        </ul>
        <p className="leading-relaxed">
          We require this information to understand your needs and provide you with a better service, in particular for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Internal record keeping</li>
          <li>Improving our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Cancellation Policy</h2>
        <p className="mb-4 leading-relaxed">
          In the event of cancellation of tour/travel services due to any avoidable/unavoidable reason/s, we must be notified in writing.
          Cancellation charges will be effective from the date we receive the written advice. Charges:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>60 days prior to arrival: 10% of the Tour / service cost</li>
          <li>45 days prior to arrival: 20% of the Tour / service cost</li>
          <li>15 days prior to arrival: 25% of the Tour / service cost</li>
          <li>07 days prior to arrival: 50% of the Tour / service cost</li>
          <li>Less than 72 hours or No Show: No Refund</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          In the case of special train journeys and peak season hotel bookings a separate cancellation policy is applicable (which can be advised as required).
        </p>
        <p className="leading-relaxed">
          Some cancellation and refund policies are out of our control:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Hotel refunds will follow the hotel's cancellation policy</li>
          <li>Train ticket cancellations will follow Railway's policy</li>
          <li>Flight ticket cancellations will follow airline company policy</li>
          <li>If the trip is cancelled after commencement, refund will be limited and depend on recoveries from vendors. No refund for unused services.</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-8">Last updated: May 11, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;