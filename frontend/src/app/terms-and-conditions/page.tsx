import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Terms and Conditions</h1>
      <p className="mb-4 leading-relaxed">Welcome to Explore India View!</p>
      <p className="mb-6 leading-relaxed">
        These terms and conditions outline the rules and regulations for the use of Explore India View's Website, 
        located at exploreindiaview.com.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">License</h2>
        <p className="leading-relaxed">
          Unless otherwise stated, Explore India View and/or its licensors own the intellectual property rights for all material on the website. 
          All intellectual property rights are reserved.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">User Restrictions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You must not republish material from this website</li>
          <li>You must not sell, rent, or sub-license material</li>
          <li>You must not reproduce, duplicate or copy material for commercial purposes</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Affiliate Disclaimer</h2>
        <p className="leading-relaxed">
          Some of the links on this site are affiliate links. This means that Explore India View may earn a commission 
          if you click on the link and make a purchase.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Modifications</h2>
        <p className="leading-relaxed">
          We reserve the right to revise these terms at any time. By using this website, you are agreeing to be bound by 
          the then current version of these Terms and Conditions.
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
          In the case of special train journeys and peak season hotel bookings a separate cancellation policy is applicable 
          (which can be advised as required).
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

export default TermsAndConditions;