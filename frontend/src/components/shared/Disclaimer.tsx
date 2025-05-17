import React from "react";
import './Disclaimer.css';
function Disclaimer() {
  const text = `Discover the Royal Heritage of Rajasthan with ExploreIndiaView
  Embark on an unforgettable journey through the land of kings with ExploreIndiaView's expertly curated Rajasthan tours. From the golden sands of the Thar Desert to the majestic palaces of Jaipur, Udaipur, Jodhpur, and beyond, experience the rich culture, vibrant festivals, and architectural wonders that define this royal state. Whether you're seeking luxury, adventure, or cultural immersion, our Rajasthan packages offer personalized itineraries, local insights, and seamless travel services to make your trip truly exceptional.
  Let ExploreIndiaView bring the magic of Rajasthan to life—book your royal escape today`;
  return (
    <div className="bg-white p-8 rounded-lg w-full text-sm">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex sm:items-center gap-2 justify-center">
        <span role="img" aria-label="scroll">📜</span>
        Disclaimer 
      </h1>
      <p className="text-gray-700 font-medium">
        ExploreIndiaView is a travel information platform designed to inspire and assist users in planning memorable trips across India. While we strive to maintain accurate and updated information related to destinations, itineraries, pricing, and experiences, we do not guarantee the completeness, reliability, or availability of any service, vendor, or travel product mentioned on our website or mobile app.
        We are not responsible for any delays, cancellations, or disruptions caused by third-party service providers including but not limited to transport operators, hotels, travel agencies, or government decisions. Users are advised to verify details directly with the concerned vendors before making bookings or travel decisions.
      </p>
      <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-3 flex sm:items-center gap-2 justify-center">
        <span role="img" aria-label="briefcase">💼</span>
        Affiliate Disclosure
      </h2>
      <p className="text-gray-700 font-medium">
        Some of the links and recommendations on ExploreIndiaView may be affiliate links. This means that if you click on these links and make a purchase or booking (such as through RailYatri, MakeMyTrip, Goibibo, Amazon, EarnKaro, Cuelinks, etc.), we may earn a small commission at no additional cost to you.
        These commissions help us maintain and improve the website and continue to offer valuable travel content and tools free of charge.
        We only promote or recommend products/services that we genuinely believe offer value to our users. However, we encourage you to perform your own research before making any purchase or booking decisions.
      </p>
      <p className="text-gray-700 font-medium">
        By using ExploreIndiaView, you agree to our Terms &amp; Conditions, Privacy Policy, and the above disclaimers.
      </p>
    </div>
  );
}

export default Disclaimer;
