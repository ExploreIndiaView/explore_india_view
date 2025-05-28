import { getRandomAdventureImage, getRandomIndexedImage } from "./Images";

export const PACKAGES = [
  {
    __id: "1",
    name: "Rajasthan Heritage Tour",
    image: getRandomIndexedImage(),
    days: 10,
    nights: 9,
    Overview: [
      `Explore the rich cultural heritage of Rajasthan with our exclusive Rajasthan Heritage Tour Package. Discover the majestic forts, royal palaces, and vibrant traditions of Jaipur, Jodhpur, Udaipur, and more. This tour is perfect for history enthusiasts and culture lovers looking to experience the true essence of Rajasthan.`,
      `Visit iconic landmarks like the Amber Fort, Mehrangarh Fort, and City Palace. Enjoy camel safaris in Jaisalmer, boat rides in Udaipur, and the colorful bazaars of Jaipur. Immerse yourself in the royal lifestyle and create unforgettable memories.`,
      `Rajasthan is a land of vibrant festivals, intricate handicrafts, and stunning architecture. This tour offers a perfect blend of history, culture, and adventure, making it an ideal choice for travelers seeking an authentic Indian experience.`,
    ],
    Highlight: [
      "Camel safari in Jaisalmer",
      "Cultural and folk dance performances",
      "Visit Mehrangarh Fort and Umaid Bhawan Palace",
      "Boat ride in Udaipur's Lake Pichola",
      "Elephant ride at Amber Fort in Jaipur",
      "Jeep safari in the Thar Desert",
      "Explore the holy city of Pushkar",
    ],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description: `Arrive Delhi/Jaipur Airport, welcomed by our Travel Agent at the Airport and Straight Drive to Jaipur. 
          Arrive Jaipur and Transfer to your hotel and our travel agent will brief you about your tour and hand over the documents.`,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
      {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur",
        description: `En route to Udaipur, visit the stunning Jain Temples of Ranakpur, known for their intricate marble carvings. Continue to Udaipur and check into your hotel. Overnight stay in Udaipur.`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Jaipur to Delhi Departure",
        description:
          "Conclude your Rajasthan Heritage Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    Price: 1600,
    FAQs: [
      {
        name: "What is the best time to visit Rajasthan?",
        description:
          "The best time to visit Rajasthan is from October to March when the weather is pleasant and ideal for sightseeing.",
      },
      {
        name: "Are camel safaris included in the package?",
        description:
          "Yes, a camel safari in Jaisalmer is included in the Rajasthan Heritage Tour Package.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  {
    __id: "2",
    name: "Incredible Tour of Rajasthan",
    image: getRandomIndexedImage(),
    days: 10,
    nights: 9,
    Overview: [
      `Explore the rich cultural heritage of Rajasthan with our exclusive Rajasthan Heritage Tour Package. Discover the majestic forts, royal palaces, and vibrant traditions of Jaipur, Jodhpur, Udaipur, and more. This tour is perfect for history enthusiasts and culture lovers looking to experience the true essence of Rajasthan.`,
      `Visit iconic landmarks like the Amber Fort, Mehrangarh Fort, and City Palace. Enjoy camel safaris in Jaisalmer, boat rides in Udaipur, and the colorful bazaars of Jaipur. Immerse yourself in the royal lifestyle and create unforgettable memories.`,
      `Rajasthan is a land of vibrant festivals, intricate handicrafts, and stunning architecture. This tour offers a perfect blend of history, culture, and adventure, making it an ideal choice for travelers seeking an authentic Indian experience.`,
    ],
    Highlight: [
      "Camel safari in Jaisalmer",
      "Cultural and folk dance performances",
      "Visit Mehrangarh Fort and Umaid Bhawan Palace",
      "Boat ride in Udaipur's Lake Pichola",
      "Elephant ride at Amber Fort in Jaipur",
      "Jeep safari in the Thar Desert",
      "Explore the holy city of Pushkar",
    ],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description: `Arrive Delhi/Jaipur Airport, welcomed by our Travel Agent at the Airport and Straight Drive to Jaipur. 
          Arrive Jaipur and Transfer to your hotel and our travel agent will brief you about your tour and hand over the documents.`,
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
      {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br/><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work. Entry fee is ₹50 for Indians and ₹200 for foreigners.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Khuri",
        description: `
    <strong>Day 1: Arrival and Khuri Exploration</strong><br/><br/>
    <strong>2:00 PM:</strong> Depart from Jaisalmer, with a 1.5-hour drive to Khuri, covering approximately 50 km.<br/><br/>
    <strong>4:00 PM:</strong> Arrive in Khuri village.<br/><br/>
    <strong>4:15 PM - 5:15 PM:</strong> Explore the village, including traditional mud houses, local artisan crafts, and experiencing the warm hospitality of village life.<br/><br/>
    <strong>5:00 PM - 7:00 PM:</strong> Enjoy a sunset camel safari at the Khuri Sand Dunes, with options for a jeep safari as well. The dunes are known for their golden sands and fewer crowds compared to Sam Sand Dunes.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Cultural evening at the desert camp, featuring Rajasthani music, dance, and a buffet dinner. Accommodation is in desert tents with attached bathrooms.<br/><br/>
    
    <strong>Day 2: Sunrise and Departure</strong><br/><br/>
    <strong>5:45 AM - 6:30 AM:</strong> Sunrise viewing over the dunes, followed by a morning camel ride or quiet chai on the dunes.<br/><br/>
    <strong>7:00 AM:</strong> Breakfast at the camp.<br/><br/>
    <strong>Morning (8:20 AM):</strong> Local sightseeing in Khuri (optional).<br/><br/>
    Possible desert wildlife spotting, including desert foxes, peacocks, and chinkaras (local guide recommended).<br/><br/>
    Optional visit to the Khuri Jain Temple, a serene temple in traditional style.
`,
      },

      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur",
        description: `En route to Udaipur, visit the stunning Jain Temples of Ranakpur, known for their intricate marble carvings. Continue to Udaipur and check into your hotel. Overnight stay in Udaipur.`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Jaipur",
        description:
          "Return to Jaipur for a full-day sightseeing tour. Visit the Jantar Mantar observatory, Albert Hall Museum, and enjoy shopping in the local markets. Overnight stay in Jaipur.",
      },
      {
        name: "Jaipur to Delhi Departure",
        description:
          "Conclude your Rajasthan Heritage Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    Price: 2000,
    FAQs: [
      {
        name: "What is the best time to visit Rajasthan?",
        description:
          "The best time to visit Rajasthan is from October to March when the weather is pleasant and ideal for sightseeing.",
      },
      {
        name: "Are camel safaris included in the package?",
        description:
          "Yes, a camel safari in Jaisalmer is included in the Rajasthan Heritage Tour Package.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  {
    __id: "3",
    name: "Colorful Rajasthan Tour",
    image: getRandomIndexedImage(),
    days: 16,
    nights: 15,
    Overview: [
      `Experience the vibrant culture and colorful traditions of Rajasthan with our Colorful Rajasthan Tour Package. This tour takes you through the most iconic destinations, including Jaipur, Udaipur, Jodhpur, and Pushkar, offering a perfect blend of history, culture, and adventure.`,
      `Witness the grandeur of Rajasthan's forts and palaces, enjoy camel safaris in the Thar Desert, and participate in local festivals and cultural performances. This tour is ideal for travelers looking to immerse themselves in the rich heritage of Rajasthan.`,
    ],
    Highlight: [
      "Explore the Pink City of Jaipur",
      "Visit the City of Lakes, Udaipur",
      "Camel safari in Jaisalmer",
      "Cultural performances in the Thar Desert",
      "Visit the holy city of Pushkar",
      "Shop for traditional handicrafts and textiles",
    ],
    Itinerary: [
      {
        name: "Arrival in Jaipur",
        description:
          "Begin your journey in Jaipur, the Pink City. Visit the Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Khuri",
        description: `
    <strong>Day 1: Arrival and Khuri Exploration</strong><br/><br/>
    <strong>2:00 PM:</strong> Depart from Jaisalmer, with a 1.5-hour drive to Khuri, covering approximately 50 km.<br/><br/>
    <strong>4:00 PM:</strong> Arrive in Khuri village.<br/><br/>
    <strong>4:15 PM - 5:15 PM:</strong> Explore the village, including traditional mud houses, local artisan crafts, and experiencing the warm hospitality of village life.<br/><br/>
    <strong>5:00 PM - 7:00 PM:</strong> Enjoy a sunset camel safari at the Khuri Sand Dunes, with options for a jeep safari as well. The dunes are known for their golden sands and fewer crowds compared to Sam Sand Dunes.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Cultural evening at the desert camp, featuring Rajasthani music, dance, and a buffet dinner. Accommodation is in desert tents with attached bathrooms.<br/><br/>
    
    <strong>Day 2: Sunrise and Departure</strong><br/><br/>
    <strong>5:45 AM - 6:30 AM:</strong> Sunrise viewing over the dunes, followed by a morning camel ride or quiet chai on the dunes.<br/><br/>
    <strong>7:00 AM:</strong> Breakfast at the camp.<br/><br/>
    <strong>Morning (8:20 AM):</strong> Local sightseeing in Khuri (optional).<br/><br/>
    Possible desert wildlife spotting, including desert foxes, peacocks, and chinkaras (local guide recommended).<br/><br/>
    Optional visit to the Khuri Jain Temple, a serene temple in traditional style.
`,
      },
     {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur",
        description: `Ranakpur is famous for the stunning white marble Jain Temple dedicated to Tirthankara Adinatha, set amidst green hills.`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
     {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Ranthambore",
        description: `Ranthambore is a renowned national park famous for tiger safaris, Ranthambore Fort, and picturesque lakes and ruins.`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/>

`,
      },
      {
        name: "Departure",
        description:
          "Conclude your Colorful Rajasthan Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    Price: 2500,
    FAQs: [
      {
        name: "What is included in the package?",
        description:
          "The package includes transportation, accommodation, daily breakfast, and guided tours.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  // {
  //   __id: "3",
  //   name: "Rajasthan Culture Tour",
  //   image: getRandomIndexedImage(),
  //   days: 15,
  //   nights: 14,
  //   Overview: [
  //     `Discover Royal Culture, Traditions, Customs & History During Rajasthan Cultural Tour. Welcome to India, You will be received by Incredible Tour To India representative at the airport and assisted to your hotel.`,
  //     `In the Hotel you will have a brief description of your tour and the representative will hand over your documents regarding the tour, Rest of the time at leisure. Overnight in Hotel.`,
  //   ],
  //   Highlights: [
  //     "Architecture Reach Mandawa Mansion (havelies) Tour",
  //     "Royal experience of Rajput Region Shekhawati",
  //     "Amber fort and City Palace of Jaipur",
  //     "Mehrangarh fort and Jaswant Tharra.",
  //     "Boating in Lake Pichola in udaipur",
  //   ],
  //   Itinerary: [
  //     {
  //       name: "Arrive Delhi – Jaipur",
  //       description: `Arrive in Delhi and transfer to Jaipur via cab/train/bus.`,
  //     },
  //     {
  //       name: "Jaipur",
  //       description: `
  //       <h1><strong>City Place</strong><h1>
  //       The City Palace of Jaipur is located in the heart of the old city of Jaipur in Rajasthan, India. It is spread over a large area, split into a series of courtyards, gardens, and buildings. <br/><br/>

  //       The outer wall was built by Maharaja Jai Singh II, but other additions are much more recent, some dating back to the beginning of the 20th century. The palace is a wonderful blend of Rajasthani and Mughal architectural style. The City Place of Jaipur is a major tourist attraction in Rajasthan. <br/><br/>

  //       <h1><strong>Astronomical Observatory (Jantar Mantar):</strong><h1>
  //       Between 1727 and 1734 Maharajah Jai Singh II of Jaipur constructed five astronomical observatories in west-central India. The observatories, or “Jantar Mantar” as they are commonly known, incorporate multiple buildings of unique form, each with a specialized function for astronomical measurement. <br/><br/>

  //       These structures with their striking combinations of geometric forms at large scale, have captivated the attention of architects, artists, and art historians worldwide, yet remain largely unknown to the general public.

  //       Jantar Mantar presents the observatories through a variety of media and information sources, making it possible to explore and learn about these historic sites through interactive panoramic “VR” photographs, time-lapse sequences, and 3D models as well as articles, drawings, and historic texts. It is a comprehensive resource for exploring the observatories in depth.
  //       `,
  //     },
  //     {
  //       name: "Shekawati",
  //       description: `
  //       <h1><strong>Amer Fort</strong><h1>

  //       The Amer Fort is situated in Amer, which is 11 kilometres from Jaipur. Amer, originally, was the capital of the state before Jaipur. It is an old fort, built-in 1592 by Raja Man Singh. This fort is also very popularly known as the Amer Palace.<br/><br/>

  //       The Amer Fort was built in red sandstone and marble and the Maotha Lake adds a certain charm to the entire Fort. Though the fort is quite old and may even look so from the outside, it is beautiful on the inside and boasts of various buildings of prominence like the ‘Diwan-i-Aam’, the ‘Sheesh Mahal’ and even the ‘Sukh Mahal’. The Amer Fort has influences of both Hindu and Muslim architecture.<br/><br/>

  //       This fort also has the ‘Shila Devi’ Temple and the ‘Ganesh Pol’ which is a gate that leads to the private palaces of the kings. The Amer Fort has many pavilions and halls of great interest and other popular attractions.<br/><br/>

  //       <h1><strong>Jaigarh Fort</strong><h1>

  //       The Jaigarh fort is the most spectacular of the three-hilltop forts that overlook Jaipur. In Mughal times, the Jaipur region was a major weapon-producing centre for the Mughal and Rajput rulers, several of the weapons being on display in the fort’s museum.<br/><br/>

  //       It is one of the few military structures of medieval India preserved almost intact, containing palaces, a granary, a well-planned cannon foundry, several temples, a tall tower and giant mounted cannon-the Jai Ban (Jaivan) which is the largest cannon on wheels in the world. Jaigarh Fort is also known as the fort of victory. The display includes a collection of canons, many of which are exquisitely decorated and were used in the Mughal campaigns led by the Rajput King, Raja Man Singh.<br/><br/>

  //       Of Jaipur’s three forts, Jaigarh is perhaps the most imposing. It does not have those delicate structures or palaces like that of Amber but if you want a quick look at a hard-core fortress, this is it. Jaigarh means ‘Victory Fort’ and was built between the 15th and the 18th century AD, and stands 15 km from Jaipur, amidst rock-strewn, thorn-scrub covered hills, its forbidding stone ramparts being visible from the Jaipur town. A steep road goes up to the main gate, the Dungar Darwaza, from where the view is are inspiring. <br/><br/>

  //       <h1><strong>Nahargarh Fort</strong><h1>

  //       Nahargarh Fort is located on the rugged ridge of Aravali Hills and it forms an impressive northern backdrop of Jaipur. It looks most classy when floodlit at night. The fort overlooks the city and presents a glittering view of the city lights. It was built in 1734 and extended in 1868. Nahargarh meaning abode of the tigers was built by Jai Singh to bolster the defence of Amber.<br/><br/>

  //       The legend has it that it was named Nahargarh after Nahar Singh, a prince whose spirit would destroy the construction and stall its progress. So after a Tantrik invoked the spirit, it agreed to withdraw on condition that the fort would be named after him. The Madhavendra Bhawan, built by Sawai Madho Singh has a unique cluster of 12 identical suites for queens and at the head is a suite for the king himself.<br/><br/>

  //       The rooms are linked by corridors and retain some delicate frescoes as well as toilets and kitchen hearths. It was used by members of the royal family for an excursion in summers and is even now a favoured picnic spot. Durg Cafeteria just above the entrance sells meals and refreshments, while Padao Restaurant on the west sells drinks around sunset.`,
  //     },
  //     {
  //       name: "Kuchaman Fort",
  //       description: `Mandawa is located in the Shekhawati region of Rajasthan. The presence of a number of forts, mansions and Haveli’s also make it a great tourist destination.<br/><br/>

  //       Mandawa used to a busy market town for Rajput merchants. It was during that period, the Rajputs built a number of palatial mansions. It was their initiative to build the archways, murals etc. as well. This actually helped in imparting a royal ambiance and vintage charm to the place. The traders used to work in different parts of the country.<br/><br/>

  //       However, whenever there was a question of building a palatial mansion, they built it in Mandawa. These mansions marked their wealth and prosperity.`,
  //     },
  //     {
  //       name: "Bikaner Via Nagaur Fort",
  //       description: `The Kuchaman Fort, a Heritage Hotel near Jaipur, Rajasthan. Ideally situated with proximity to key tourist destinations in India Pushkar, Ajmer, Jaipur and Samode. The scenic beauty and picturesque setting of this fort make you travel back in time. <br/><br/>

  //       This Heritage Hotel and Resort offers more than just accommodation activities include Horse Safaris, Camel Safaris, Village Safaris, Bird watching and Temple excursions. Our special Kuchaman City excursion takes you through old heritage Haveli’s and other memorable lanes. <br/><br/>

  //       The resort itself offers Five-star comfort. An indoor Pool, Yoga Centre, Kerala Massages and a multi-cuisine restaurant. This Heritage Hotel and Fort with its high and massive ramparts, 32 bastions, 10 gates and various defences is a formidable fort unique in its architecture. One of the finest Heritage Hotels in Rajasthan, The Kuchaman Fort is rapidly becoming the favourite choice for the discerning traveller. <br/><br/>

  //       As you go winding up an undulating mountain road, towards the massive portals of this magnificent fort, you travel back to in time, only to be swallowed into the inside of this ancient world of strange mysteries, of secret chants and mantras, of classical music and ragas, and of fine arts and murals. The Kuchaman Fort. Beckoning, inviting, waiting to welcome you as it rises proudly int the clear skies at the top of a 1000 feet high rock cliff.
  //       <br/><br/>

  //       The Kuchaman Fort, a rare jewel set in a glittering sea of golden sands, as though a million-year-old rock itself changed its shape, to record the extraordinary era of Kuchaman glory. The Kuchaman Fort, where with echoing, reverberating step, you peel away successive layers of timeless history, perfectly preserved, frozen in rock and time.`,
  //     },
  //     {
  //       name: "Jaisalmer",
  //       description: `Just over five centuries old, Bikaner was founded by a scion of the house of Marwar (Jodhpur). The fort of Bikaner, Junagadh, however, was built in 1593 by Raja Rai Singh who also served as a general in the army of Emperor Akbar. Made from red sandstone and encircled by a moat around which the modern city of Bikaner has spread in a somewhat erratic fashion, Junagadh consists of several palaces and apartments in a remarkable state of preservation. The art of mason and sculptor is most obvious in the recreation of delicate stone screens, kiosks, pavilions and series of arched entrances to buildings reached from corridors that have windows overlooking the city beyond. <br/><br/>

  //       Some of the palaces are among the most richly decorated in Rajasthan and include Anup Mahal, Chandra Mahal and Phool Mahal. They give the impression of rich inlay of pietra dura, though in fact the apartments are merely richly painted. The paintings have been preserved as good as new because of the extremely dry heat conditions of the desert town. Another palace, Badal Mahal recreated the painting of clouds on its walls, a reminder of the monsoon that often failed the settlement. The Anup Mahal courtyard has a throne set in a pool of water. Bringing alive the sensitivity the rulers showed in their building environment.`,
  //     },
  //     {
  //       name: "Jaisalmer",
  //       description: `Morning sightseeing tour of Jaisalmer The golden rays of the setting sun, the colourfully adorned locals, the massive forts and mansions, the extremely fascinating craftsmanship, Rajput Havelis, all these make Jaisalmer a place of must visit in Rajasthan. Moreover, a visit to the Jaisalmer Fort (the second oldest fort in Rajasthan after Chittaur), Patwon ki Haweli, (the grandest haveli of Jaisalmer), Desert Culture centre and museums gives you some glimpse of this small town’s past. <br/><br/>

  //       meet your religious taste; Salim Singh ki Haweli and Nathmal ki Haweli give you some more idea of the haweli architecture of the town. Besides these, Gadsisar Lake is also an interesting spot that you must visit in this desert city.

  //       Afternoon visit Sam Sand Dunes, Ideal for viewing sunsets, these sites will also give you a chance to capture the picturesque sand dunes in your camera. Overnight in Hotel. / Night at Desert Camp.`,
  //     },
  //     {
  //       name: "Manvar",
  //       description: `Rajasthan is presently one of the most enchanting tourist destinations in the world. Among all the cities in Rajasthan, Jodhpur is also experiencing a huge number of tourist footfalls in the recent past Tours to Manvar is one such attraction that is located in the midst of the Thar Desert, Manvar lying exactly between the Jodhpur, Jaisalmer and Bikaner. It will surely give a great experience for the tourists by offering the beauty of the desert of at its best. It becomes a must visit during excursions from Jodhpur.<br/><br/>

  //       Manvar is an excellent destination to have a thoroughly enjoyable holiday. Manvar is one of the perfect options for those who wish to get the true feel of deserts. It is such a fascinating place that offers the raw beauty of nature. It will let you explore the various parts of the desert to enjoy its kaleidoscopic beauty. Sightseeing Manvar provides you with an opportunity to enjoy the enthusiasm of wilderness in the desert. Manvar has the sprawling resort that built on 5 acres of land reflecting the true ambience of the traditional village.<br/><br/>

  //       The best time to visit here is between the months of September to March. During this time, you will be able to get to see a large number of migratory demoiselle cranes. Ride-on Jeep safaris gives you an enjoyable experience for the tourists.<br/><br/>`,
  //     },
  //     {
  //       name: "Jodhpur",
  //       description: `Rajasthan is one of the most prominent tourist destinations that offer a lot of tourist attractions. The variety of tourist attraction helps in making Rajasthan one of the most sought after tourist attraction. In fact, Rajasthan is currently one of the most popular tourist destinations in the world. The unique charm appeals similarly to the domestic tourists as well as foreign tourists. Among the various cities in Rajasthan that manages to attract a large number of tourists, Jodhpur is a prominent one.<br/><br/>

  //       Jodhpur is a tourist place in Rajasthan that has a variety of tourist places. These tourist places experience a huge number of tourist footfall. However, in the recent past, Jodhpur is also experiencing a huge number of tourist footfalls as the tourists are coming down to the place to go for excursions from Jodhpur. Presence of a number of tourist attractions in close proximity to the Jodhpur helps in making Jodhpur excursions a thoroughly enjoyable excursion for the tourists. These excursions take you for a number of tours.<br/><br/>

  //       Tours to Manvar is one such attraction that will surely be a great experience for the tourists. Offering the beauty of desert of at its best, it is a must-visit during excursions from Jodhpur.`,
  //     },
  //     {
  //       name: "Jodhpur (Maharangarh Fort with Jaswantarda) via Osian – Bundi",
  //       description: `Having arranged many mobile camel safaris in the usual mainstream and busy destinations we realized that a more exclusive destination was missing from this fun experience. A location was sourced and what better than on the first sand dune of the famous Thar Desert of Rajasthan.<br/><br/>

  //       With expansive views of the vast desert on one side and the intricate temples of Osian on the other, this camp, the first of its kind in India, offers easy access to the local desert villages. Venturing out on camel one can meet the proud local tribes, the Bishnois and Bhils, potters and weavers and shepherds in their natural surroundings, not to mention the various varieties of desert wildlife such as blue bulls, gazelles, foxes, peacocks and partridges to name but a few.<br/><br/>

  //       The nearby ancient village of Osian is legendary for its mesmerizing 6th /8th-century temples, sand-dunes and diversity of Rajasthani culture and tradition and Jodhpur, with its magnificent Meherangarh Fort, is just 60 km away.<br/><br/>

  //       Being a permanent structure we also have the additional bonus of a refreshing swimming pool, a feat of architectural engineering in a sand dune ! and the safari bar, a wonderful place to relax in the evenings over a drink and cigar to the gentle strains of jazz music.<br/><br/>

  //       Once at the camp -nestled in the dunes your host Reggie Singh, grandson of Maharaj Ratan Singh of Jodhpur will invite you for an evening of cocktails, folk entertainment and a semi-formal candle lit dinner.

  //       `,
  //     },
  //     {
  //       name: "Jodhpur – Udaipur",
  //       description: `This morning after breakfast drive to Udaipur. En-route Visit Ranakpur famous for Jain Temples. The Ranakpur Jain Temples were built during the reign of the liberal and gifted monarch Rana Kumbha in the 15th century. An enormous basement covers 48,000 sq. feet area. There are four subsidiary shrines, twenty-four pillared halls and eligibly domes supported by over four hundred columns.<br/><br/>

  //       Visit Muchhal Mahaveer Temple – The distinctive feature of this Jain temple is the statue of Lord Mahavira with a moustache. From here proceed to Udaipur. check into your hotel. Rest of the day is at your leisure you may rest in the hotel Or visit the Udaipur city in the evening. Overnight in Udaipur Overnight at the hotel.`,
  //     },
  //     {
  //       name: "Udaipur City Tour",
  //       description: `This morning after the breakfast City tour of Udaipur also known as the city of Lakes. It is the historic capital of the former kingdom of Mewar in Rajasthan Agency. Lake Pichola, Fateh Sagar Lake, Udai Sagar and Swaroop Sagar in the city are considered some of the most beautiful lakes in the state. Places you visit CITY PALACE. Udaipur is a palaces complex in Udaipur in the Indian state Rajasthan. It was built by the Maharana Udai Mirza Singh as the capital of the Sisodia Rajput clan in 1559 after he moved from Chittor. It is located on the east bank of the Lake Pichola and has several palaces built within its complex.<br/><br/>

  //       Udaipur was the historic capital of the former kingdom of Mewar in the Rajputana Agency and its last capital. JAGDISH TEMPLE is one of the famous temples of Udaipur. Located in the city palaces compel of Udaipur, this temple is made in the Indo Aryan style of architecture. In 1651, Jagdish temple was built by Maharana Jagat Singh, who ruled Udaipur during 1628-53. The temple is dedicated to Lord Vishnu (Laxmi Narayan), the preserver of the universe. JAG MANDIR is a palace built on an island in the Lake Pichola.<br/><br/>

  //       It is also called the “Lake Garden Palace”. Its construction is credited to three Maharana of the Sisodia Rajputs of Mewar kingdom. It is named as “Jagat Mandir” in honour of the last-named Maharana Jagat Singh. SAHELION KI BARI is one of the most beautiful gardens and a major tourist destination in Udaipur.<br/><br/>

  //       The garden is famous for its lush green lawns marble art and fountains. English translation of Sahelian ki Bari means Garden of Maids. By evening you may take a walking tour on your own through the narrow lanes and back streets of Udaipur up to the Washing Ghats at the lake Pichola. by late evening return to your hotel. Overnight in Udaipur.`,
  //     },
  //     {
  //       name: "Bundi",
  //       description: `Built in the 14th century, the Taragarh Fort is the star attraction in Bundi. With the entry being free and souvenir shops fortunately absent, the fort provides an option of a peaceful ramble round its premises. Inside the instant, eye-catchers include the Bhim Burj, a large battlement with a cannon placed on it and a large reservoir carved out of a single piece of rock.<br/><br/>

  //       The views from the fort are exceptional, especially during the sunset when the rays seem to lend a lovely grace to the entire area. In Chittorgarh, the Chittorgarh Fort is the imposing structure atop a hill of 300 m which has many palaces and monuments. This fort is situated 1 km from the new town and is spread over an area of around 692 acres.<br/><br/>

  //       Inside the large fort, is a road that connects the different gates, viz. the main gate or Ram Pol, Padan Pol, Bhairon Pol, Hanuman Pol, Ganesh Pol, Laxman Pol and Jodla Pol. These gates were built for security and fortification of the area. There are around 84 water bodies and many small palaces, important ones being Rana Kumbha Palace, Rani Padmini’s Palace, etc.<br/><br/>

  //       Besides these structures, the fort is known for the Kirti Stambha, in honour of the 1st Jain Tirthankara, the victory tower or Vijay Stambha, Meera Temple, Kalika Mata temple and the various sculptures and carvings on the monuments.`,
  //     },
  //     {
  //       name: "Jaipur",
  //       description: `After breakfast, explore the Pink City with an excursion to Amber Fort, situated just outside the city, enjoy the experience of ride on elephant back to and from the top of the hill on which the fort is situated. Afternoon sightseeing tour of City Palace in the heart of Jaipur is known for its blend of Rajasthani and Mughal architecture. Not far away is the Central Museum.<br/><br/>

  //       Jantar Mantar is the largest of the five observatories built by Sawai Jai Singh. The Hawa Mahal or the Palace of Winds was constructed for the royal ladies to watch the royal processions without being seen, all monuments are located in the vicinity of City Palace Complex of Jaipur.<br/><br/>

  //       Later late afternoon is kept free to visit the famous Markets of Textiles, Gems, Carpets, and handicrafts. One can also visit Nahargarh Fort to see it illuminated over the floodlights. Return to the hotel for overnight.`,
  //     },
  //     {
  //       name: "Agra",
  //       description: `After breakfast drive to Jaipur en-route visit Old deserted town of Mughal Dynasty – Fatehpur Sikri built in red sandstone in honour of Saint Salim Chisti who foretold the birth of 3 sons to Emperor Akbar, is an example of robust stability combined with originality.<br/><br/>

  //       Each important edifice here represents a type by itself. Notable among them is the Diwan-e-Khas, Punch Mahal, the Tomb of Salim Chisti, and the Bulund Darwaza. Later continue to proceed to Jaipur. Rest of the day at leisure, in the evening hours, enjoy walking in the colourful streets and bazaars of Jaipur City.<br/><br/>

  //       The beauty of Jaipur is that its unique architecture and town planning is visible at even the most common places such as its squares and lanes. Overnight at Hotel.

  //       `,
  //     },
  //   ],
  //   Inclusion: [
  //     "All arrival, departure, sightseeing as per the above Itinerary by air-conditioned Luxury car with English speaking driver",
  //     "Daily buffet breakfast",
  //     "Indian sim card with cell phone",
  //     "Elephant ride at amber fort",
  //     "Boat ride at Udaipur",
  //     "Flight ticket from Jodhpur to New Delhi",
  //     "Guide service at all destinations and monuments",
  //     "All applicable hotel & transport taxes",
  //     "Government services tax of 4.89%",
  //   ],
  //   Exclusion: [
  //     "Any meals other than those specified",
  //     "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
  //     "Entrance fees during sightseeing",
  //     "Any other item not specified",
  //     "Driver tip",
  //     "International airfare",
  //   ],
  //   Price:110100,
  //   FAQs: [
  //     {
  //       name: "How do we plan Rajasthan Cultural Tour?",
  //       description:
  //         "New Delhi – Jaipur – Shekhawati – Kuchaman Fort – Bikaner – Jaisalmer – Manvar – Jodhpur – Bundi – Udaipur – Agra - New Delhi.",
  //     },
  //     {
  //       name: "Best time for Rajasthan Cultural Tour",
  //       description:
  //         "Rajasthan is the western part of Inia and it's always hot so October t March is the best time for visit the Rajasthan Cultural tour.",
  //     },
  //     {
  //       name: "how to reach Rajasthan",
  //       description:
  //         "After landing in New Delhi we can reach Rajasthan( Jaipur ) by Air, Train, and Privet car.",
  //     },
  //   ],
  // },
  {
    __id: "4",
    name: "Royal Heritage Tour of Rajasthan",
    image: getRandomIndexedImage(),
    days: 15,
    nights: 14,
    Overview: [
      `The Royal Heritage Tour of Rajasthan offers a majestic journey through the grand palaces, mighty forts, and regal traditions of India's most colorful state. Starting in Jaipur, the Pink City, travelers experience royal splendor at the City Palace, Amber Fort, and Hawa Mahal. Moving to Mandawa and Kuchaman, the tour showcases intricately painted havelis and ancient forts that reflect the merchant and feudal legacy of Shekhawati. In Bikaner, the majestic Junagarh Fort and the unique Karni Mata Temple impress with their architecture and mystique. The golden sands of Jaisalmer highlight desert charm with its towering fort, ornate havelis, and dune camps in Khuri. Jodhpur, the Blue City, offers the awe-inspiring Mehrangarh Fort and royal palaces. Udaipur, with its serene lakes and opulent City Palace, epitomizes romance and royal grace. The historic battlefields of Chittorgarh and the formidable walls of Kumbhalgarh Fort echo tales of valor and resistance. Ranakpur stuns with its intricately carved Jain temples, while Mount Abu offers a refreshing hill retreat. The spiritual charm of Ajmer and the wilderness of Ranthambore blend history and nature. Bundi, Alwar, Rohitgarh, and boutique retreats like Lakshman Sagar provide intimate glimpses into Rajasthan’s noble legacy. Ending in Delhi, the capital connects the journey with Mughal grandeur and modern vibrance. This tour immerses travelers in the legacy of Rajput kings, warrior tales, timeless art, and unmatched hospitality.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Arrive from Delhi to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Kuchaman and Nagaur fort",
        description: `Kuchaman Fort is located in the town of Kuchaman and is a majestic fort offering panoramic views and showcasing Rajput architecture, now partly a heritage hotel.`,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: " Hanumangarh",
        description: `Hanumangarh is an ancient town with historical significance, featuring remnants from the Indus Valley Civilization and the Bhatner Fort.`,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Ranthambore",
        description: `
    <strong>Ajmer to Ranthambore Itinerary</strong><br/><br/>

    <strong>8:00 AM – 12:00 PM:</strong> Travel from Ajmer to Ranthambore<br/><br/>

    <strong>12:00 PM – 1:00 PM:</strong> Lunch in Sawai Madhopur (Ranthambore Town)<br/><br/>
    Suggested Restaurants:<br/><br/>
    - The Oberoi Vanyavilas Café<br/><br/>
    - The Dining Room<br/><br/>
    - Local dhabas<br/><br/>

    <strong>1:00 PM – 1:30 PM:</strong> Entry & Permit Check for Ranthambore National Park<br/><br/>
    Zone Allotment: Based on booking<br/><br/>
    Safari Timings (Afternoon): 2:30 PM – 5:30 PM<br/><br/>

    <strong>2:30 PM – 5:30 PM:</strong> Ranthambore National Park – Jungle Safari<br/><br/>
    Entry Fee (per person):<br/><br/>
    - Indians: ₹1000 (Gypsy), ₹600 (Canter)<br/><br/>
    - Foreigners: ₹1800 (Gypsy), ₹1400 (Canter)<br/><br/>
    Safari Duration: 3 hrs<br/><br/>
    Highlights: Tiger sighting (if lucky!), leopards, sloth bears, birds, lakes, fort views<br/><br/>

    <strong>5:45 PM – 6:30 PM:</strong> Ranthambore Fort (Optional Quick Visit)<br/><br/>
    Drive to Jaipur
`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/><br/>

    <strong>7:00 PM:</strong> Departure to Agra
`,
      },
      {
        name: "Jaipur to Delhi departure",
        description: `Departure from Jaipur to Delhi.`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 5350,
    FAQs: [],
  },
  {
    __id: "5",
    name: "Cultural and Colorful Tour of Rajasthan, Delhi and Agra",
    image: getRandomIndexedImage(),
    days: 30,
    nights: 29,
    Overview: [
      `Rajasthan, the Land of Kings, offers a vibrant and deeply cultural experience shaped by centuries of royal heritage, desert landscapes, and diverse traditions. Its cities burst with color — from the pink hues of Jaipur and the blue lanes of Jodhpur to the golden sandstone of Jaisalmer. The state celebrates life with exuberant festivals like Pushkar Fair, Teej, and Gangaur, where locals don traditional attire, perform folk dances like Ghoomar and Kalbelia, and play lively music with instruments like the sarangi and dholak. Every corner showcases rich craftsmanship through intricate textiles, hand-painted pottery, and mirror-work embroidery. 
      Historic forts, majestic palaces, and havelis reflect the grandeur of Rajput architecture, while bustling bazaars overflow with spices, bangles, and Rajasthani cuisine like dal baati churma and ghevar. Rajasthan’s villages and desert camps offer authentic glimpses into rural life, where camel rides, puppet shows, and warm hospitality complete the colorful and cultural tapestry of the state.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Delhi (Arrival)",
        description: `
    <strong>Delhi Tour Itinerary</strong><br/><br/>

    <strong>8:00 AM – 9:00 AM: Lodhi Gardens</strong><br/><br/>
    A serene park housing 15th-century tombs, ideal for a peaceful morning walk amidst historical architecture.<br/><br/>

    <strong>9:15 AM – 10:15 AM: Humayun's Tomb</strong><br/><br/>
    A UNESCO World Heritage Site and a precursor to the Taj Mahal, showcasing Mughal architecture.<br/><br/>

    <strong>10:30 AM – 11:15 AM: Lotus Temple</strong> (Closed on Monday)<br/><br/>
    Known for its flower-like architecture, it's a Baháʼí House of Worship open to all, promoting unity and peace.<br/><br/>

    <strong>11:30 AM – 12:15 PM: Gurudwara Bangla Sahib</strong><br/><br/>
    A prominent Sikh gurdwara known for its association with the eighth Sikh Guru and its community kitchen (langar).<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch at Connaught Place</strong><br/><br/>
    Options: Various eateries ranging from local street food to international cuisines.<br/><br/>

    <strong>1:45 PM – 2:15 PM: Agrasen ki Baoli</strong><br/><br/>
    A historical stepwell with unique architecture, offering a glimpse into ancient water conservation methods.<br/><br/>

    <strong>2:30 PM – 3:30 PM: Red Fort</strong> (Closed on Mondays)<br/><br/>
    A UNESCO World Heritage Site, this fort was the main residence of the Mughal emperors and a symbol of India's rich history.<br/><br/>

    <strong>3:45 PM – 4:15 PM: Jama Masjid</strong><br/><br/>
    One of the largest mosques in India, known for its impressive architecture and panoramic views from its minaret.<br/><br/>

    <strong>4:30 PM – 5:30 PM: Qutub Minar</strong><br/><br/>
    The tallest brick minaret in the world, this UNESCO World Heritage Site is a fine example of Indo-Islamic architecture.<br/><br/>

    <strong>6:00 PM – 7:00 PM: Akshardham Temple</strong> (Charges apply for exhibitions and water show)<br/><br/>
    Darshan Hours: 10:00 AM – 8:00 PM<br/><br/>
    A modern architectural marvel showcasing Indian culture, spirituality, and traditions. Note: Mobile phones and cameras are not allowed inside.<br/><br/>

    <strong>7:00 PM – 7:45 PM: Dinner at Akshardham Food Court</strong><br/><br/>
    Options: Pure vegetarian meals in a serene environment.<br/><br/>

    <strong>7:45 PM – 8:15 PM: Sahaj Anand Water Show at Akshardham</strong><br/><br/>
    Show Timing: 7:45 PM (After sunset)<br/><br/>
    Duration: Approximately 24 minutes<br/><br/>
    A captivating multimedia water show combining lasers, video projections, underwater flames, water jets, and surround sound to narrate a spiritual story.<br/><br/>

    <strong>8:30 PM – 9:30 PM: India Gate</strong><br/><br/>
    A war memorial dedicated to Indian soldiers, beautifully illuminated at night, offering a serene end to your day.
`,
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Kuchaman fort ",
        description: `Kuchaman Fort is located in the town of Kuchaman and is a majestic fort offering panoramic views and showcasing Rajput architecture, now partly a heritage hotel.`,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Khuri",
        description: `
    <strong>Day 1: Arrival and Khuri Exploration</strong><br/><br/>
    <strong>2:00 PM:</strong> Depart from Jaisalmer, with a 1.5-hour drive to Khuri, covering approximately 50 km.<br/><br/>
    <strong>4:00 PM:</strong> Arrive in Khuri village.<br/><br/>
    <strong>4:15 PM - 5:15 PM:</strong> Explore the village, including traditional mud houses, local artisan crafts, and experiencing the warm hospitality of village life.<br/><br/>
    <strong>5:00 PM - 7:00 PM:</strong> Enjoy a sunset camel safari at the Khuri Sand Dunes, with options for a jeep safari as well. The dunes are known for their golden sands and fewer crowds compared to Sam Sand Dunes.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Cultural evening at the desert camp, featuring Rajasthani music, dance, and a buffet dinner. Accommodation is in desert tents with attached bathrooms.<br/><br/>
    
    <strong>Day 2: Sunrise and Departure</strong><br/><br/>
    <strong>5:45 AM - 6:30 AM:</strong> Sunrise viewing over the dunes, followed by a morning camel ride or quiet chai on the dunes.<br/><br/>
    <strong>7:00 AM:</strong> Breakfast at the camp.<br/><br/>
    <strong>Morning (8:20 AM):</strong> Local sightseeing in Khuri (optional).<br/><br/>
    Possible desert wildlife spotting, including desert foxes, peacocks, and chinkaras (local guide recommended).<br/><br/>
    Optional visit to the Khuri Jain Temple, a serene temple in traditional style.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur and Mount-Abu",
        description: `Ranakpur is famous for the stunning white marble Jain Temple dedicated to Tirthankara Adinatha, set amidst green hills.

        Mount Abu is Rajasthan’s only hill station, popular for the Dilwara Jain Temples, Nakki Lake, and the cool, green hill environment.`,
      },
     {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: " Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Ranthambore",
        description: `
    <strong>Ajmer to Ranthambore Itinerary</strong><br/><br/>

    <strong>8:00 AM – 12:00 PM:</strong> Travel from Ajmer to Ranthambore<br/><br/>

    <strong>12:00 PM – 1:00 PM:</strong> Lunch in Sawai Madhopur (Ranthambore Town)<br/><br/>
    Suggested Restaurants:<br/><br/>
    - The Oberoi Vanyavilas Café<br/><br/>
    - The Dining Room<br/><br/>
    - Local dhabas<br/><br/>

    <strong>1:00 PM – 1:30 PM:</strong> Entry & Permit Check for Ranthambore National Park<br/><br/>
    Zone Allotment: Based on booking<br/><br/>
    Safari Timings (Afternoon): 2:30 PM – 5:30 PM<br/><br/>

    <strong>2:30 PM – 5:30 PM:</strong> Ranthambore National Park – Jungle Safari<br/><br/>
    Entry Fee (per person):<br/><br/>
    - Indians: ₹1000 (Gypsy), ₹600 (Canter)<br/><br/>
    - Foreigners: ₹1800 (Gypsy), ₹1400 (Canter)<br/><br/>
    Safari Duration: 3 hrs<br/><br/>
    Highlights: Tiger sighting (if lucky!), leopards, sloth bears, birds, lakes, fort views<br/><br/>

    <strong>5:45 PM – 6:30 PM:</strong> Ranthambore Fort (Optional Quick Visit)<br/><br/>
`,
      },
      {
        name: " Lakshman Sagar",
        description: `Lakshman Sagar is a luxury boutique resort near Raipur, offering a blend of rustic charm and comfort in a natural setting.`,
      },
      {
        name: " Rohitgarh",
        description: `Rohitgarh is a lesser-known heritage village area with rural Rajasthani charm, featuring a heritage fort now serving as a homestay.`,
      },
      {
        name: " Alwar",
        description: `Alwar features scenic spots like Siliserh Lake, Bala Quila Fort, and is close to the haunted Bhangarh Fort and Sariska Tiger Reserve.`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/><br/>

    <strong>7:00 PM:</strong> Departure to Agra
`,
      },
      {
        name: "Agra",
        description: `
    <strong>Agra Itinerary</strong><br/><br/>

    <strong>8:00 AM – 10:00 AM: Taj Mahal</strong><br/><br/>
    Opening Hours: Sunrise to Sunset (Closed on Fridays)<br/><br/>
    Iconic white marble mausoleum, UNESCO World Heritage Site.<br/><br/>

    <strong>10:15 AM – 11:30 AM: Agra Fort</strong><br/><br/>
    Historic Mughal fort with views of Taj Mahal and royal chambers.<br/><br/>

    <strong>11:45 AM – 12:15 PM: Itmad-ud-Daulah ("Baby Taj")</strong><br/><br/>
    First Mughal tomb in white marble, intricate pietra dura work.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch in Agra</strong><br/><br/>
    Suggestions:<br/><br/>
    - Pinch of Spice<br/><br/>
    - Shankara Vegis<br/><br/>
    - Joney's Place<br/><br/>

    <strong>1:45 PM – 2:15 PM: Mehtab Bagh</strong><br/><br/>
    Garden across Yamuna River with rear Taj Mahal view—great for photos.<br/><br/>

    <strong>2:30 PM – 3:30 PM: Akbar's Tomb, Sikandra</strong><br/><br/>
    Resting place of Emperor Akbar, grand architecture in a serene complex.<br/><br/>

    <strong>4:00 PM – 5:00 PM: Mariam's Tomb</strong> (Optional, if time permits)<br/><br/>
    Wife of Akbar, less crowded Mughal-era monument.<br/><br/>

    <strong>5:30 PM – 7:00 PM: Sadar Bazaar / Shopping</strong><br/><br/>
    What to buy:<br/><br/>
    - Marble artifacts<br/><br/>
    - Leather goods<br/><br/>
    - Sweets (petha)<br/><br/>

    <strong>7:00 PM – 9:30 PM: Dinner + Optional Light & Sound Show at Agra Fort</strong>
`,
      },
      {
        name: "Agra to Delhi departure",
        description: `Departure from Agra to Delhi.`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 5000,
    FAQs: [],
  },
  {
    __id: "6",
    name: "Marwar Tour",
    image: getRandomIndexedImage(),
    days: 6,
    nights: 7,
    Overview: [
      `The Marwar Tour of Rajasthan takes you through the heart of the desert kingdom, revealing the rugged beauty, valorous history, and vibrant culture of the Marwar region. Centered around Jodhpur, the Blue City, the tour begins with the awe-inspiring Mehrangarh Fort, Umaid Bhawan Palace, and the bustling Sardar Market. From there, travelers can explore Mandore, the ancient capital of Marwar, known for its cenotaphs and gardens. A visit to Osian, an ancient temple town in the Thar Desert, offers both spiritual significance and camel safari experiences. The tour often includes nearby desert villages like Khimsar and Rohetgarh, where heritage hotels and rustic charm showcase Marwar’s noble hospitality. Bikaner, another jewel of Marwar, enchants with Junagarh Fort, the royal palaces, and the unique Karni Mata Temple. In smaller towns like Nagaur and Phalodi, travelers witness authentic desert life, historic forts, and salt-lake landscapes. This tour paints a vivid picture of Marwar’s royal legacy, Rajput bravery, and desert traditions through its architecture, cuisine, music, and warm desert hospitality.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Delhi to Mandawa (Arrival)",
        description: `You will be arrived at Delhi airport and be shifted to the hotel. On the first day you will be exploring the historical walled city of Delhi.
        
        The sightseeing tour of Delhi will include the Qutub Minar, Humayun’s Tomb, India Gate, President House, Mahatma Gandhi memorial, Red Fort, Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel. Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel.
        `,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: " Nagaur",
        description: `Nagaur, located between Jodhpur and Bikaner, is a lesser-explored gem of Rajasthan known for its historical significance and rustic charm. The centerpiece is the massive Nagaur Fort, which houses beautiful palaces, temples, gardens, and ancient frescoes. The fort comes alive during the Nagaur Cattle Fair, one of the largest in India, drawing visitors with its vibrant mix of trading, folk music, camel races, and local crafts. Other notable sites include the Tarkeen Dargah, a revered Sufi shrine, and the serene Jain Glass Temple. With its authentic Rajasthani atmosphere, fewer crowds, and well-preserved heritage, Nagaur offers a peaceful yet culturally rich experience for travelers seeking offbeat destinations in Rajasthan.`,
      },
      {
        name: "Mandawa to Delhi Departure",
        description: `Check out and drive to Delhi airport to board the flight back to your home with sweet memories, a bundle of souvenirs and an address book full of friends. (The Tour Ends).`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 3500,
    FAQs: [],
  },
  {
    __id: "7",
    name: "East Rajasthan Tour",
    image: getRandomIndexedImage(),
    days: 8,
    nights: 7,
    Overview: [
      `The East Rajasthan Tour offers a captivating journey through the culturally rich and ecologically diverse eastern region of the state, blending royal heritage with wildlife and spirituality. The tour often starts from Jaipur, the Pink City, with its majestic forts like Amber and Nahargarh, royal palaces, and colorful bazaars. Moving to Ranthambore, visitors enjoy thrilling wildlife safaris in one of India’s top tiger reserves, home to Bengal tigers and ancient fort ruins nestled in the jungle. Bharatpur enchants bird lovers with the Keoladeo National Park, a UNESCO World Heritage site known for its migratory birds. Alwar, with attractions like Bala Quila, Siliserh Lake, and proximity to the haunted Bhangarh Fort, adds historical depth and mystery. The spiritual town of Ajmer, home to the Ajmer Sharif Dargah, and nearby Pushkar, with its sacred lake and Brahma Temple, offer a spiritual pause along the route. This tour gives a perfect blend of history, nature, culture, and faith, all within a compact and scenic circuit of Rajasthan.
    `,
    ],
    Highlights: [],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 3500,
    Itinerary: [
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Mount-Abu",
        description: `Mount Abu is Rajasthan’s only hill station, popular for the Dilwara Jain Temples, Nakki Lake, and the cool, green hill environment.
        `,
      },
     {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/><br/>

`,
      },
      {
        name: " Bharatpur to Jaipur departure",
        description: `Bharatpur is known for the Keoladeo National Park, a UNESCO World Heritage site and a haven for migratory birds and birdwatchers.`,
      },
    ],
    FAQs: [],
  },
  {
    __id: "8",
    name: "Mini Rajasthan Tour",
    image: getRandomIndexedImage(),
    days: 15,
    nights: 14,
    Price: 3600,
    Overview: [
      `The Mini Rajasthan Tour is a compact yet enriching journey that captures the essence of Rajasthan’s royal heritage, desert charm, vibrant culture, and scenic beauty within a short span. Ideal for travelers with limited time, the tour typically includes key destinations like Jaipur, Jodhpur, and Udaipur. Starting in Jaipur, visitors explore architectural marvels like Amber Fort, City Palace, and Hawa Mahal while enjoying traditional markets and Rajasthani cuisine. The tour then moves to Jodhpur, the Blue City, where the massive Mehrangarh Fort, Umaid Bhawan Palace, and vibrant bazaars reveal the grandeur of Marwar. Finally, Udaipur, the City of Lakes, offers serene boat rides on Lake Pichola, visits to the majestic City Palace, and strolls through romantic gardens. This compact route gives travelers a taste of Rajasthan’s royal history, desert landscapes, local crafts, and warm hospitality—making it perfect for a first-time or quick visit.
    `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: " Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Jaipur to Delhi departure",
        description: `Departure from Agra to Delhi.`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "9",
    name: "Rajasthan Central City Tour",
    image: getRandomIndexedImage(),
    days: 5,
    nights: 4,
    Price: 4500,
    Overview: [
      `The Rajasthan Central Tour offers a deep dive into the heart of the state, blending royal heritage, desert culture, and spiritual richness. Centered around Jodhpur, Ajmer, Pushkar, and Nagaur, the tour highlights majestic forts like Mehrangarh, sacred sites like the Ajmer Sharif Dargah, and the holy Pushkar Lake with its unique Brahma Temple. Nagaur Fort and its annual cattle fair provide a glimpse into traditional desert life. This central circuit showcases authentic Rajasthani architecture, vibrant markets, and folk traditions, offering a rich cultural experience in a compact, centrally located route.
      `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "10",
    name: "Lake City Tour",
    image: getRandomIndexedImage(),
    days: 15,
    nights: 14,
    Overview: [
      `The Lake City Tour of Rajasthan revolves around the enchanting beauty of Udaipur, famously known as the City of Lakes. Nestled in the Aravalli hills, Udaipur offers a romantic blend of serene waters, royal palaces, and scenic landscapes. Highlights include the grand City Palace, tranquil Lake Pichola, the iconic Lake Palace, and the serene Fateh Sagar Lake. Nearby attractions like Saheliyon ki Bari, Bagore Ki Haveli, and Monsoon Palace add charm to the experience. The tour may also include nearby lake towns like Rajsamand and Jaisamand, making it ideal for those seeking beauty, heritage, and peace in one journey.
      `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Rajsamand",
        description: `Rajsamand, located near Udaipur in Rajasthan, is known for the historic Rajsamand Lake, built by Maharana Raj Singh. Nearby attractions include the majestic Kumbhalgarh Fort, a UNESCO World Heritage Site, and the Kumbhalgarh Wildlife Sanctuary. Haldighati, famous for the battle of Maharana Pratap, and the cave temple of Parshuram Mahadev are also close by. The town is rich in history and offers scenic landscapes, making it a peaceful yet culturally significant destination.
        `,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: " Back to Jaipur",
        description: `Back to Jaipur`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 3500,
    FAQs: [],
  },
  {
    __id: "11",
    name: "Desert Tour",
    image: "/images/camel1.jpg",
    days: 15,
    nights: 14,
    Overview: [
      `A Desert Tour in Rajasthan immerses travelers in the golden landscapes of the Thar Desert, offering a blend of adventure, history, and cultural richness. Starting from Jaisalmer, the "Golden City," visitors can explore the towering Jaisalmer Fort, wander through the intricate Patwon Ki Haveli, and enjoy the serenity of Gadisar Lake before heading to the mesmerizing Sam Sand Dunes for a camel safari and traditional Rajasthani folk performances under the starlit sky. Moving to Bikaner, the city known as the "Camel Country," tourists can visit Junagarh Fort, marvel at the unique Karni Mata Temple, and learn about India's finest camels at the Camel Breeding Farm. The lesser-known Osian, often referred to as the "Oasis in the Desert," presents a treasure trove of ancient Jain and Hindu temples and thrilling jeep safaris through the rugged terrain. Khimsar, a hidden gem in the desert, offers tranquil luxury amidst the dunes, where heritage camps provide an authentic desert experience with breathtaking sunset views. Throughout the journey, travelers can enjoy immersive experiences such as camel rides, jeep safaris, fire dance performances, and Rajasthani folk music, all while savoring the region’s signature delicacies like Dal Baati Churma. The Desert Tour of Rajasthan is a captivating blend of royal history, desert adventures, and local traditions, leaving visitors enchanted by the rustic charm and warm hospitality of the desert communities.
      `,
    ],

    Highlights: [],
    Itinerary: [
      {
        name: "Arrive from Delhi to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Jaipur to Delhi Departure",
        description: `Depature from Jaipur to Delhi`,
      },
    ],
    Price: 4000,
    Inclusion: [],
    Exclusion: [],
    FAQs: [],
  },
];


// Our services
export const SERVICES = [
  {
    __id: "2",
    name: "Event Organizer",
    image: [
      {
        image: "/images/event.jpg",
        content: "Event Organizer",
      },
      {
        image: "/images/event2.jpg",
        content: "Event Organizer",
      },
      {
        image: "/images/event3.jpg",
        content: "Event Organizer",
      },
    ],
    Overview: `We are one of the reputed Event Organizers In Jaipur having expertise in organizing Private & Corporate Events. Our team has arranged a variety of events for clients in Jaipur (Rajasthan). We have expertise in all aspects of arranging an event. With us to help you & guide you, the event is guaranteed to be a success. We take care of every step – right from sending out invites , guest management, venue arrangement, finalizing the menu etc. Our expert team ensures that our customers are saved from the hassles of arranging the event, as we efficiently take care of all the aspects on their behalf.`,
  },
  {
    __id: "3",
    name: "Car and Bike",
    image: [
      {
        image: "/images/bike1.jpg",
        content: "Car and Bike",
      },
      {
        image: "/images/car.jpg",
        content: "Car and Bike",
      },
      {
        image: "/images/bike2.jpg",
        content: "Car and Bike",
      },
    ],
    Overview: `ExploreIndiaView Tours (Tour Operator in India) is one of the oldest tour Operators & Holiday Planner in India. We remain as committed to serving travellers today as when they first opened their doors. In its working years ExploreIndiaView Tours has made business ventures with various companies to add the power of the world's leading Holidays and Tour expense management company. Steady growth and intelligent partnerships allow ExploreIndiaView Tours to care for the needs of any traveller, whether corporate or individual. The core values of ExploreIndiaView Tours are communication, motivation, satisfaction and partnership. Whether you are an individual or a seasoned business traveller, we offer the same level of service. Today most of the people who come to India or want to visit places like Jaipur Agra or even North & south India for long tours or for business trips prefer the Rajasthan Royal Tours The company has a fleet of cars ranging from luxury to standard with A/C and Non A/C facilities. The entire cars are well maintained and are driven by educated, multilingual and generous chauffeurs. Almost all our drivers are experienced and they know each and every route of New Delhi, Agra, Jaipur and the Main destination of India. we make your travel easier, and hassle-free and make you reach any place, destination, Monument, airport, railway station and office on time. If you are looking for car hire services in India or pickup and drop facilities to the airport or a car for a short trip to Agra and Jaipur OR Rajasthan, we are going to provide you with the best car at the most competitive rate. We give you great value for your hard money and charge a competitive market price for the service we deliver to you. With Rajasthan Royal Tours, you can book luxury cars for rent in India like BMW, Benz, Mercedes, Audi A6, and many other high-end models depending on various needs. So, enjoy the journey in style with the best taxi booking service provider in India.`,
  },
  {
    __id: "4",
    name: "Tour Guide Service",
    image: [
      {
        image: "/images/guide1.jpg",
        content: "Tour Guide Service",
      },
      {
        image: "/images/guide2.jpg",
        content: "Tour Guide Service",
      },
      {
        image: "/images/guide3.jpg",
        content: "Tour Guide Service",
      },
    ],
    Overview: `Experience the vibrant culture, rich heritage, and majestic history of Rajasthan with our expert tour guide services. At [Your Website Name], we understand that a knowledgeable and passionate guide can transform your journey into an unforgettable experience. Our licensed and professional tour guides are fluent in multiple languages and deeply familiar with Rajasthan's iconic cities like Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner, and more.

Whether you are exploring grand forts, royal palaces, colorful bazaars, or hidden heritage sites, our guides provide insightful commentary, fascinating legends, and local anecdotes that bring each location to life. They ensure a safe, enriching, and immersive experience tailored to your interests and preferences.

Our guides also assist with local navigation, bargaining in markets, and finding authentic cuisine, making your travel smooth and hassle-free. Whether you prefer a city walk, cultural exploration, or heritage trail, we have personalized guided tours for individuals, families, and groups.

Let our experienced guides help you discover the soul of Rajasthan—its people, traditions, and timeless charm. Book a tour guide with us and embark on a journey that goes beyond sightseeing.
`,
  },
  {
    __id: "5",
    name: "Travel Insurance",
    image: [
      {
        image: "/images/travel1.jpg",
        content: "Travel Insurance",
      },
      {
        image: "/images/travel2.jpg",
        content: "Travel Insurance",
      },
      {
        image: "/images/travel3.jpg",
        content: "Travel Insurance",
      },
    ],
    Overview: `Travel insurance is a must whether you are on a business or leisure trip. Travel insurance safeguards you from any untoward incidents like luggage theft/loss, medical emergencies en route, etc. It is not enough to have travel insurance, it is essential that you have chosen the right travel insurance plan for Tour to India. At Rajasthan Royal Tours we offer the best Travel Insurance Services in Rajasthan. Here, we have experts who will guide you & offer reliable advice regarding the best travel insurance as per your budget and travel requirements. We work in the best interests of our customers & ensure that they understand all the nitty-gritty details of the travel insurance plan that they are an option for.`,
  },
];

// Hotels Data
export const HOTELSDATA = {
  images: [
    {
      image: "/images/hotel.jpg",
      content: "Our Partners Hotels",
    },
    {
      image: "/images/hotel-2.jpg",
      content: "Our Partners Hotels",
    },
    {
      image: "/images/hotel-1.jpg",
      content: "Our Partners Hotels",
    },
  ],
  hotels: [
    {
      __id: "1",
      city: "Udaipur",
      hotels: [
        {
          name: "Brahma Niwas",
          image:
            "https://pix8.agoda.net/hotelImages/13857570/-1/6e87c656a42cd5d881401625ad6f6b36.jpg?ce=0&s=1024x",
          desc: `Get your trip off to a great start with a stay at this property, which offers car park free of charge. Conveniently situated in the Lake City part of Udaipur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous City Palace of Udaipur. Rated with 4 stars, this high-quality property provides guests with access to restaurant and outdoor pool on-site.`,
        },
        {
          name: "Sterling Jaisinghgarh Udaipur",
          image:
            "https://pix8.agoda.net/hotelImages/879882/-1/9c47ddd2ea4a5a2aff5085ae461e6ebe.jpg?ce=0&s=1024x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Lake City part of Udaipur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous City Palace of Udaipur. Rated with 4 stars, this high-quality property provides guests with access to restaurant, indoor pool and outdoor pool on-site.`,
        },
        {
          name: "The Oberoi Udaivilas, Udaipur",
          image:
            "https://pix8.agoda.net/hotelImages/1061960/-1/e97dbf900b9239783587743871df7cd8.jpg?ca=29&ce=0&s=600x",
          desc: `Fondly known as the "City of Lakes", Udaipur, the erstwhile capital of the Kingdom of Mewar, is resplendent with vast hilltop forts, palaces, temples and gardens that serve as reminders of its majestic history. Falling in love with the charm of the “City of Lakes” is easy when you are staying at the best hotel in Udaipur: The Oberoi Udaivilas. Located on the banks of Lake Pichola, our 5 star hotel is spread over 1,21,406 square metres of luxuriant gardens, with an intricate layout of interconnecting domes and corridors that reflect the layout of Udaipur itself; whose seven lakes are linked by canals. Superior accommodations, fine restaurants serving signature cuisine and a quiet emphasis on your wellbeing with daily yoga and personally curated spa therapies.`,
        },
      ],
    },
    {
      __id: "2",
      city: "Jaipur",
      hotels: [
        {
          name: "Holiday Inn Jaipur City Centre",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/273748308.jpg?k=f280555938bfb341be627a32e148dc6be52a794a787b02f8d205b356de94c154&o=&hp=1",
          desc: `Offering an outdoor swimming pool, a fitness center and a spa and wellness center, Holiday Inn Jaipur City Center is within 2.2 mi from the architectural marvel of the City Palace and the Amer Fort. Each elegant air-conditioned room here will provide you with a satellite TV, seating area and a mini-bar. Featuring a shower, private bathroom also comes with a hairdryer and free toiletries. Extras include an iPod dock. Guest can also request for amenities like pen drive and snack basket/ fruit basket.`,
        },
        {
          name: "Laxmi Palace Heritage Boutique Hotel",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/189255024.jpg?k=44d94947bf36bff8cb5b0020c6384a33d889b3fed31b1476d19a8d6e9ae709a0&o=&hp=1",
          desc: `You're eligible for a Genius discount at Laxmi Palace Heritage Boutique Hotel! To save at this property, all you have to do is sign in. Built in heritage style with transitional theme, Laxmi Palace, located in Jaipur has beautifully paintings with great architecture, attractive lobby, open terraces, lovely ambiance and comfortable rooms with antique furnishings. It offers Fresco Miniature paintings and a rooftop restaurant. Free WiFi and parking are provided.`,
        },
        {
          name: "The Oberoi Raj Vilas, Jaipur",
          image:
            "https://pix8.agoda.net/hotelImages/1061960/-1/e97dbf900b9239783587743871df7cd8.jpg?ca=29&ce=0&s=600x",
          desc: `Experience a sincerely warm welcome when you stay with us at our 5-star hotel in Jaipur: The Oberoi Rajvilas. Spread over 1,29,499 square meters of beautifully landscaped gardens, with traditional architecture, flaming mashaal torches and reflection pools. Exquisite accommodation, including luxury tents inspired by the era of Maharajas, fine restaurants serving authentic Rajasthani and international cuisines, specially curated romantic experiences for couples and our sincere hospitality. The perfect setting for the holiday of a lifetime at the best 5-star luxury hotel in Jaipur.`,
        },
      ],
    },
    {
      __id: "3",
      city: "Jaiselmer",
      hotels: [
        {
          name: "Chokhi Dhani - The Palace Hotel",
          image:
            "https://pix8.agoda.net/hotelImages/730328/-1/19e512f6136648bad7805e7dfcc6963d.jpg?ca=7&ce=1&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Suthar Para part of Jaisalmer, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Jaisalmer Fort. Rated with 3 stars, this high-quality property provides guests with access to restaurant and fitness center on-site.`,
        },
        {
          name: "Golden Star Desert Camp",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/503929610.jpg?k=1fb6e74e50a2db94d78782ac5ffc63a2059639119df606a7b7e1853ab174b6b4&o=&s=116x",
          desc: `Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the Sam Sand Dunes part of Jaisalmer, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Jaisalmer Fort. This 5-star property is packed with in-house facilities to improve the quality and joy of your stay.`,
        },
        {
          name: "Sky Desert Safari Camp Jaisalmer",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/324469633.jpg?k=a1789b6d4e5d53b55512ea71d45c629d8099ab510c0a21faa656dc4fcad156e0&o=&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Sam Sand Dunes part of Jaisalmer, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Jaisalmer Fort. This 4-star property features massage to make your stay more indulgent and memorable.`,
        },
      ],
    },
    {
      __id: "4",
      city: "Jodhpur",
      hotels: [
        {
          name: "Krishna Prakash Heritage Haveli Hotel",
          image:
            "https://pix8.agoda.net/hotelImages/283921/-1/d75080f6ca045059310bb9910b151975.jpg?ca=16&ce=1&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Gulab Sagar, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Mehrangarh Fort. Rated with 3 stars, this high-quality property provides guests with access to massage, restaurant and indoor pool on-site.`,
        },
        {
          name: "Radisson Jodhpur",
          image:
            "https://pix8.agoda.net/hotelImages/9455137/0/339b55207b46763f75ab41db030014c6.jpg?ca=9&ce=1&s=1024x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Air Force Area part of Jodhpur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Mehrangarh Fort. Rated with 3.5 stars, this high-quality property provides guests with access to restaurant, fitness center and indoor pool on-site.`,
        },
        {
          name: "Bijolai Place Jodhpur – Inde Hotel",
          image:
            "https://pix8.agoda.net/hotelImages/288261/-1/ca6a5fe9723251c126f17801df946e2d.png?ca=0&ce=1&s=375x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Kayalana Lake part of Jodhpur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Mehrangarh Fort. This 3.5-star property features restaurant to make your stay more indulgent and memorable.`,
        },
      ],
    },
    {
      __id: "5",
      city: "Agra",
      hotels: [
        {
          name: "Holiday Inn Agra MG Road",
          image:
            "https://pix8.agoda.net/hotelImages/7545956/0/1fdada58ee31d9022836b8f09e1e695c.jpg?ca=23&ce=0&s=600x",
          desc: `In addition to the standard of IHG Clean Promise, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Conveniently situated in the Dayal Bagh part of Agra, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Taj Mahal. Rated with 5 stars, this high-quality property provides guests with access to restaurant, fitness center and indoor pool on-site.`,
        },
        {
          name: "Radisson Hotel Agra",
          image:
            "https://pix8.agoda.net/hotelImages/1177534/-1/08c2836b4099ca31ccd37fb430191bb1.jpg?ca=9&ce=1&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Tajganj, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Taj Mahal. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.`,
        },
        {
          name: "The Oberoi Amarvilas, Agra",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/47406124.jpg?k=e033dd8dd176f693648a8ab488388f411b46ce34d68950117aa49423c0daf79c&o=&s=600x",
          desc: `The capital of the Mughal Empire in the 16th and 17th centuries, Agra is home to three UNESCO world heritage sites: the Taj Mahal, Agra Fort and the ancient city of Fatehpur Sikri; all of which are legacies from Mughal times. Located just 600 meters from the Taj Mahal, the world’s most exquisite testimony to undying love, it is easy to rekindle romance at The Oberoi Amarvilas. The best hotel in Agra is inspired by Mughal palace designs; with fountains, terraced lawns, reflection pools and pavilions. The Oberoi Amarvilas is a five star hotel that offers unrestricted views of Taj Mahal from all rooms and suites, complemented by our warm, personalised hospitality.`,
        },
      ],
    },
  ],
};

export const CAROUSELIMAGE = [
  {
    image: "/images/landing1.jpg",
    content: `Make your trip worthwhile`,
  },
  {
    image: "/images/landing2.jpg",
    content: `Top Adventure`,
  },
  {
    image: "/images/landing3.jpg",
    content: `Explore new Places`,
  },
  {
    image: "/images/landing4.jpg",
    content: `Discover new Things`,
  },
];

// Top Services
export const TOPSERVICES = [
  {
    name: "One Day Tour",
    image: getRandomIndexedImage(),
    path: "/onedaytour",
  },
  {
    name: "Adventure",
    image: getRandomAdventureImage(),
    path: "/adventure",
  },
  {
    name: "Camping Hiking",
    image: "/images/camping1.jpg",
    path: "/camping_hiking",
  },
];

export const OTHERSERVICES = [
  {
    name: "Flight Service",
    image: "/images/airline1.jpg",
    path: "https://linksredirect.com/?cid=230828&source=linkkit&url=https%3A%2F%2Fwww.happyeasygo.com%2Fflight%2F",
    PoweredBy: "HappyEasyGo",
  },
  {
    name: "Railway Service",
    image: "/images/train1.jpg",
    path: "https://linksredirect.com/?cid=230828&source=linkkit&url=https%3A%2F%2Fwww.railyatri.in%2F",
    PoweredBy: "Rail Yatri",
  },
  {
    name: "Hotel Service",
    image: "/images/hotel-1.jpg",
    path: "https://linksredirect.com/?cid=230828&source=linkkit&url=https%3A%2F%2Fwww.makemytrip.com%2Fhotels",
    PoweredBy: "Make My Trip",
  },
];

export const RAILWAYIMAGES = [
  {
    image: "/images/train1.jpg",
    content: "Train Service",
  },
  {
    image: "/images/train2.jpg",
    content: "Train Service",
  },
  {
    image: "/images/train3.jpg",
    content: "Train Service",
  },
];

export const AIRLINESERVICES = [
  {
    name: "Delhi - Jaipur",
  },
  {
    name: "Jaipur - Delhi",
  },
  {
    name: "Delhi - Agra",
  },
  {
    name: "Agra - Delhi",
  },
  {
    name: "Mumbai - Jaipur",
  },
  {
    name: "Jaipur - Mumbai",
  },
  {
    name: "Mumbai - Agra",
  },
  {
    name: "Agra - Mumbai",
  },
];

export const TRAINSERVICES = [
  { name: "Delhi - Jaipur Express" },
  { name: "Mumbai - Jaipur Superfast" },
  { name: "Chennai - Jaipur Rajdhani" },
  { name: "Kolkata - Jaipur Duronto" },
  { name: "Hyderabad - Jaipur Special" },
  { name: "Ahmedabad - Jaipur Intercity" },
];

export const AIRLINEIMAGES = [
  {
    image: "/images/airline1.jpg",
    content: "Airline Service",
  },
  {
    image: "/images/airline2.jpg",
    content: "Airline Service",
  },
  {
    image: "/images/airline3.jpg",
    content: "Airline Service",
  },
];

// One Day Tour
export const ONEDAYTOUR = {
  images: [
    {
      image: getRandomIndexedImage(),
      content: "Top Day Tour",
    },
    {
      image: getRandomIndexedImage(),
      content: "Discover new Places",
    },
    {
      image: getRandomIndexedImage(),
      content: "Make your trip worthwhile",
    },
  ],
  cities: [
    {
      name: "Udaipur",
      image: "/images/package7.jpg",
      Overview: [
        {
          name: "Udaipur",
          description: `formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaic.`,
        },
        {
          name: "city palace",
          description: `Udaipur is a palace complex situated in the city of Udaipur in the Indian state of Rajasthan. It was built over a period of nearly 400 years, with contributions from several rulers of the Mewar dynasty. Its construction began in 1553, started by Maharana Udai Singh II of the Sisodia Rajput family as he shifted his capital from the erstwhile Chittor to the newfound city of Udaipur. The palace is located on the east bank of Lake Pichola and has several palaces built within its complex.`,
        },
        {
          name: "lake pichola",
          description: `This is a lake situated in the Lake City, Udaipur, Rajasthan. The true reflection of the grandeur of Rajasthan, Lake Pichola is amongst the top places to visit in Udaipur. Lake Pichola is a man-made freshwater lake, Lake Pichola Best Tourist Attraction in Udaipur, founded in 1362 AD, it was named after the adjacent Picholi village. It is one of the several contiguous lakes and developed over the last few centuries in and around the city of Udaipur. The lakes around Udaipur were mostly constructed by building dams to meet the drinking water and irrigation requirements of the city and its locality. Inside the Lake, two islands, Jag Niwas and Jag Mandir are situated and have been extended with several palaces to provide views of the lake.`,
        },
        {
          name: "Saheliyon Ki Bari",
          description: `Saheliyon Ki Bari was laid for a group of forty-eight maidens. This garden is located on the banks of the Fateh Sagar Lake, presenting a green retreat in the dry lands of Rajasthan. It was built from 1710 to 1734 by Maharana Sangram Singh for the royal ladies. As per legend, the garden was designed by the king himself and he presented this garden to his queen. The queen was accompanied by 48 maids in her marriage. To offer all of them pleasurable moments away from the political intrigues of the court, this garden was made. This patterned garden used to be the popular relaxing spot of the royal ladies. The queen with her maids and female companions used to come here for a stroll and spend their time in leisure
          `,
        },
        {
          name: "Jagdish Temple",
          description: `Jagdish Temple is one of the best architectural wonders of the Mewar dynasty. Jagdish temple showcases the Indo- Aryan architectural style. The temple is built keeping the rules of Vastushastra, the Hindu architectural science in mind. This three-storied temple is built on raised platform flaunting magnificently carved pillars, huge airy halls and painted walls that are adorned with vibrant colors and intricately decorated ceilings. At the entrance, there are two massive elephants statues of stone, installed to welcome the visitors. An inscription engraved on the stone slab is found at the entry. Mahara Jagat Singh installed the inscription to record his contributions to the temple.`,
        },
      ],
    },
    {
      name: "Jaipur",
      image: "/images/package5.jpg",
      Overview: [
        {
          name: "Jaipur",
          description: `We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market`,
        },
        {
          name: "Amber Fort",
          description: `Visit Amber Fort with an Elephant ride. The fort is situated on a hill 12Kms from the city,`,
        },
        {
          name: "Nahargarh Fort ",
          description: `he smallest of the three forts, notable primarily for excellent views over Man Sagar lake and the vast sprawl of Jaipur.`,
        },
        {
          name: "Jantar Mantar ",
          description: `The Jantar Mantar is the largest of five astronomical observatory built by Maharaja Jai Singh during the period 1727-1734 in north India. It is located very close to the City Palace.`,
        },
        {
          name: "Hawa Mahal",
          description: ``,
        },
        {
          name: "Albert Hall Museum,",
          description: ``,
        },
        {
          name: "Local Market of Jaipur",
          description: ``,
        },
      ],
    },
    {
      name: "Jodhpur",
      image: "/images/package11.jpg",
      Overview: [
        {
          name: "",
          description: `Showcasing various shades of blue, Jodhpur is one of the best places to visit in India. The royal city of Rajasthan is fondly called ‘Blue city’. Jodhpur tours offer exciting opportunities to explore numerous palaces, forts and havelis that add to the charm of the city. Commended as one of the largest cities in Rajasthan, days fall short in the royal pleasures. Also, the city is known as the ‘gateway to the Thar’ as it lies of the edge of the golden desert. For a tryst with history as well as delights of the desert, Jodhpur Tour Packages by Indian Holiday offers memorable holidays. Flowing out of the walls, the city has become one of the popular tourist spots in Rajasthan which is cherished by architecture lovers. Embracing the numerous palaces, forts, and havelis, even the lanes of the city ooze out a different vibe, something that can be cherished in Jodhpur tour only. Besides, the lakes, gardens, and mausoleums also pull in travelers who like less crowded places. Choose your favorite Jodhpur tour packages and enjoy wonderful family holidays in this beautiful ‘Blue City’. A myriad of attractions like towering Mehrangarh Fort, Umaid Bhawan Palace, Moti Mahal, etc. adorns the city. The Jaswant Thada, Mandore Gardens and Rao Jodha Desert Rock Park are some other highlights of the Jodhpur that render the visitors in a state of awe. While the charms are many, one of the must visit places in Jodhpur is the Bishnoi Village. Embark on safari and here you can witness the authentic bliss of Rajasthan, its culture and other charms. Book any of Jodhpur Tour packages and get ready for a superb experience. Savor delicious Jodhpuri food. Shop for traditional women footwear called ‘Jodhpuri Mojari’. Partake in popular festivals celebrated in Jodhpur like Gangaur, Teej, Rajasthan International Folk Festival and many more. A trip to Jodhpur is replete with many delightful moments to be cherished forever. Make the charm of the exploring the royal city all the more amazing with stay at the wonderful heritage hotels of Jodhpur. While the options are abundant, few match to the thrill of staying at the Umaid Bhavan Place, the newest royal palace in India. Also, it has the reputation of hosting some of the grandest royal weddings in India.`,
        },
        {
          name: "Mehrangarh Fort",
          description: `The Fort of Jodhpur crowns a rocky hill that rises 400 feet above the surrounding plain, and appears both to command and to meld with the landscape. One of the largest forts in Rajasthan, it contains some of the finest palaces and preserves in its museum many priceless relics of Indian courtly life. For over five centuries Mehrangarh has been the headquarters of the senior branch of Rajput clan known as the Rathores. According to their bards, the ruling dynasty of this clan had at an earlier period controlled Kanauj (in what is known as Uttar Pradesh). Like other prominent medieval Rajput rulers – including the famous Prithviraj Chauhan – they were defeated by the invaders from Afghanistan at the end of the 12th century.`,
        },
        {
          name: "Umaid Bhawan Palace",
          description: `Umaid Bhawan Palace, located in Jodhpur, Rajasthan, India, is one of the world’s largest private residences. A part of the palace is managed by Taj Hotels. It is named after Maharaja Umaid Singh, grandfather of the present owner, Gaj Singh. The palace has 347 rooms and is the principal residence of the former Jodhpur royal family. A part of the palace is not a residence The groundbreaking for the foundations of the building was carried out on 18 November 1929 by Maharaja Umaid Singh and the construction work was completed in 1943.`,
        },
        {
          name: "Taj Mahal of Marwar",
          description: `The beautiful memorial in marble often described as the “Taj Mahal of Marwar” was built in memory of Maharaja Jaswant Singhjill of Jodhpur (1873-1895) by his son Maharaja Sardar Singhji (1895-1911) and completed in 1906 A.D. The main hall has been built like a temple where puja (ritual) is also performed. The worship of ancestors is common to the Rajput clans. Today, Jaswant Thada is managed and looked after by the Mehrangarh Museum Trust (MMT) and is open to the public. The Trust is operating a Museum in Jaswant Thada displaying portraits of Marwar rulers along with informative didactics – the information serves as an orientation space to understand the history of Marwar through the Portraits. Its grounds serve as a serene venue for morning concerts during music festivals such as the Rajasthan International Folk Festival and the World Sacred Spirit Festival.`,
        },
      ],
    },
    {
      name: "Jaisalmer",
      image: "/images/package4.jpg",
      Overview: [
        {
          name: "",
          description: `Jaisalmer, also known as the "Golden City" is a popular tourist destination in Rajasthan, India, known for its stunning architecture, rich culture, and beautiful desert landscapes. A private day tour of Jaisalmer can include the following highlights:`,
        },
        {
          name: "Jaisalmer Fort:",
          description: `Also known as the "Sonar Quila", this UNESCO World Heritage Site is a must-see attraction in Jaisalmer. The fort is a stunning example of Rajasthani architecture and offers panoramic views of the city.`,
        },
        {
          name: "Havelis",
          description: `Jaisalmer is known for its beautiful havelis, traditional Rajasthani mansions, many of which have been converted into hotels and guesthouses. Some of the famous havelis are Patwon Ki Haveli, Salim Singh Ki Haveli, and Nathmal Ji Ki Haveli.`,
        },
        {
          name: "Jain Temples",
          description: `Jaisalmer is home to a number of Jain temples, including the Parsvanath Temple and the Rishabhdeo Temple, known for their intricate carvings and beautiful architecture.`,
        },
        {
          name: "Desert Safari",
          description: `Jaisalmer is located in the heart of the Thar Desert and a desert safari is a must-do activity. You can explore the desert on camelback or in a jeep and enjoy a traditional Rajasthani dinner under the stars.`,
        },
        {
          name: "Local Bazaar",
          description: `Visiting the local bazaar is an excellent way to experience the local culture and buy some souvenirs. The bazaar is famous for its textiles, handicrafts, and traditional jewelry.`,
        },
        {
          name: "Sam Sand Dunes",
          description: `Sam Sand Dunes is a popular spot for a sunset view, where you can see the beautiful desert landscape and enjoy a traditional Rajasthani cultural program.`,
        },
        {
          name: "",
          description: `It's always a good idea to check with the local authorities for any restriction or permit needed for traveling to some areas of the state. Keep in mind that the best time to visit Jaisalmer depends on your personal preferences and the kind of experience you are looking for. If you want to enjoy the desert activities, then the winter months are the best time to go. But if you're interested in sightseeing and other activities like trekking, then the summer months are the best time to go.
          
          `,
        },
      ],
    },
    {
      name: "Agra",
      image: "/images/package19.jpg",
      Overview: [
        {
          name: "Agra Tour Package",
          description: `Agra - the city of Taj Mahal was a special place to explore. There is something special in the air of Agra that speaks about its glorious past. I was overwhelmed with the first sight of Taj Mahal and tours to Itmad-Ud-Daula's tomb and Agra fort made my stay absolutely unforgettable. Today I am leaving this great city only with a firm desire to return back here very soon.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Uttar Pradesh<br/>
          <strong>Best Time to visit</strong>: September-March<br/>
          <strong>Must Visit Attraction</strong>: Taj Mahal<br/>
          <strong>Excursions</strong>: Fatehpur Sikri<br/>
          `,
        },
        {
          name: "A word about Agra",
          description: `Once the capital of Mughal empire in India, today Agra is a major tourist hub because of Taj Mahal. It boasts of a number of buildings that exhibit the fine craftsmanship of the Mughal era. Moreover its narrow lanes filled with the aroma of mughlai cuisine and exquisite handcrafted items made of fine leather also catch the attention of tourists.`,
        },
        {
          name: "Taj Mahal, Agra India",
          description: `The day started with a visit to Taj Mahal- an edifice, which I always wanted to explore. The incredible building was like a precious marble box inlaid with beautiful stones. I along with a Japanese guy headed towards the north entrance gate to watch the sunrise. The inner courtyard opens from an archway lined walkway into greenness. The beautiful details taken on the Taj made me speechless. Mughal floral patterns and Arabic writing adorn the arches, the flowers beautiful blues and reds of lapis lazuli, turquoise. I thought the Taj was all white but the subtlety of color was the best surprise. I left the place but kept looking back at it from my cab's window till the time it disappeared completely from my eyes.`,
        },
        {
          name: "Itmad-Ud-Daula's tomb",
          description: `I had seen the similar structure at Lahore that was also built by Nurjahan for Jehangir. The tomb, however was a delight to look at. The inlay designs and carvings were no less than the same at Taj Mahal but it was the beautiful marble lattice work that gave it a distinct charm. By the time I completed the visit to this beautiful architectural wonder, it was late night so I returned back to the hotel savoring the memories of a day well spent.`,
        },
        {
          name: "Agra Red Fort",
          description: `Next morning I headed directly to the Red Fort en route paying a short visit to Taj Mahal again. The mammoth fort had a variety of attractions including Diwan-E-Aam, Diwane-E-Khas, Octagonal Tower, Jehangir Palace, Mina Masjid, Moti Masjid, Sheesh Mahal and Golden Pavilions.`,
        },
        {
          name: "Shopping at Agra",
          description: `Exploring the extremely colorful markets of Agra was a great experience. I bought replicas of Taj Mahal as souvenirs for my friends and relatives. But the leather items including leather chappals (sandals), purses, bags and other decorative items were just irresistible.`,
        },
      ],
    },
    {
      name: "Ajmer",
      image: "/images/package21.jpg",
      Overview: [
        {
          name: "Ajmer Tour Package",
          description: `Ajmer gave me the first glimpse of the unity in diversity in India. Ajmer is the place where I learned how people from different religions live with each other in total peace and harmony. Specially, in the present circumstances, it was surprising to see people from different religions visiting the dargah with same devotion. I came here to watch the blend of Sufi culture and Hindu religion and Ajmer offered me just the same.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best Time to visit</strong>: September-March<br/>
          <strong>Must Visit Attraction</strong>: Dargah<br/>
          <strong>Excursions</strong>: Pushkar<br/>
          `,
        },
        {
          name: "A word about ajmer",
          description: `Ajmer represents India's true face of secularism and tolerance. It is a city that attracts thousands of devotees of different religion who come here to seek the blessings of Khwaja Moinuddin Chishti. It is place where only faith matters and that faith is represented by the threads which are tied to the shrine of Khwaja Moinuddin Chishti.`,
        },
        {
          name: "Dargah of Khwaja Moinuddin Chishti",
          description: `As soon as I reached Ajmer, I dint waste a single minute and reached to the Dargah passing through the colorful bylanes of the city. The entry to the Dargah was through the Buland Darwaza that leads to the inner courtyard. The high gateway has beautifully carved silver doors. In the courtyard there were two huge cauldrons with capacity of 2240 kg and 4480 kg. Suddenly a saw a group of young peoples carrying threads and tying them to the shrine of the saint. Inquisitive, I asked them the reason and they told me that by doing so Khwaja will fulfill all their desires. But it was particularly heartening to see that the devotees were not just the Muslims but they represented all the major religions.`,
        },
        {
          name: "The Museum of Ajmer",
          description: `Exploring the Ajmer museum was like visiting the past of Rajasthan. The various galleries here exhibited a fine collection of important exhibits from almost all the princely states in Rajasthan. The museum's main sections were devoted to sculptures, epigraphs, prehistoric antiquities, arms and weapons. There was also a library with a collection of rare books and other historical publications.`,
        },
      ],
    },
    {
      name: "Bikaner",
      image: "/images/package22.jpg",
      Overview: [
        {
          name: "Bikaner Tour Package",
          description: `I had expected Bikaner to be a city with princely charm and it came out just the same. The forts and palaces of Bikaner reminded me the royal past of the city. The colorful markets provided me all the stuff that I could take back home as souvenirs. But at the end of trip I realized more than anything else, it was the hospitality of the people here that touched the core of my heart.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best Time to visit</strong>: November-March<br/>
          <strong>Must Visit Attraction</strong>: Junagarh Fort<br/>
          <strong>Excursions</strong>: Bhandeshwar & Sandeshwar Temples<br/>
          `,
        },
        {
          name: "A word about Bikaner",
          description: `Bikaner, the royal walled city is a part of the desert tourist triangle lying on the northern tip of the triangle. The Bikaner city is named after Rathore prince, Rao Bikaji who founded it in 1486 AD. A seven-kilometers wall with five entrances surrounds he city protecting it from vagaries of the desert and any external aggression.`,
        },
        {
          name: "Junagarh Fort in Bikaner",
          description: `I wanted to see this unconquered fort and what an imposing site it was! The exquisite beauty of the Junagarh fort was best reflected by a high wall and deep moats that surrounded the fort. The 37 bastions guarded the Junagarh fort but there were only two gates providing access inside the fort. I chose Suraj Pol or the Sun Gate to enter into the fort and was surprised by the inside beauty. There was a profusion of 37 palaces, temples and pavilions made of red sandstone. The exquisitely carved windows, balconies, towers and mirrors, paintings and carved marble panels in the Moon Palace were enough for me to comprehend the architect's zest for excellence.`,
        },
        {
          name: "Lalgarh Palace in Bikaner",
          description: `The next destination was the glorious Lalgarh Palace. The very first sight of the palace was spellbinding terraced lawns and the Bougainvillea bushes adding to its beauty. The intricate filigree work and latticework exhibited the excellence of yesteryear's architecture. The Lalgarh palace museum displayed well preserved hunting trophies and old photographs.`,
        },
        {
          name: "The Ganga Golden Jubilee Museum",
          description: `The museum was divided into various parts that enabled me to visit it according to my preferences. The various sections here included Local Arts and Crafts, History, Sculpture, Terracotta and Bronzes, Armory, Miniature Paintings and Folk-Arts, Dr. L.P. Tessitori Memorial Section and Lithoprints of the British interpretation of the war of Independence 1857.`,
        },
      ],
    },
    {
      name: "Bharatpur",
      image: "/images/package23.jpg",
      Overview: [
        {
          name: "Bharatpur Tour Package",
          description: `Visiting the tranquil place like Bharatpur Bird Sanctuary was an eye opener. I reached here on my way to the famous Keoladeo Bird Sanctuary but the village itself was no less charming. The colorful chops here selling exquisite handcrafted items and the smiling faces of local people who are always willing to help is something I will remember for the rest of my life. I strongly recommend everyone to spend some time here in the village before heading to the Bharatpur Bird Sanctuary.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best time to visit</strong>: November-February<br/>
          <strong>Must visit attraction</strong>: Keoladeo Bird Sanctuary<br/>
          <strong>Excursions</strong>: Deeg<br/>`,
        },
        {
          name: "A word about Bharatpur",
          description: `Bharatpur is popular for its bird sanctuary near the Keoladeo Ghana National Park, which is the finest in Asia with a rich avian variety. Every year, the rare Siberian cranes come to spend the winter in the warmer climate of Bharatpur the best place for Birdwatching in India. Of the remnants of the royal past remain the marvelous Bharatpur Palace housing a rich repository of a large number of ancient exhibits that date back to the early 15th century.`,
        },
        {
          name: "Bharatpur Bird Sanctuary",
          description: `I was aware of the fact the best time to watch birds in early morning so I hired an accommodation near the sanctuary. Early morning I started for the sanctuary on a rented bicycle. The actual sanctuary started 2 kms inside the gate. Once inside the main sanctuary, I could view countless birds including Indian More Hen, Snake bird, Saras crane, Grey Haron, Sleeping Heron, Weaver bird, Falcon, Owl and the all famous Siberian Cranes. I took a lot of photos of the birds and the landscape, which was also very attractive. The Siberian Cranes were deep in the mashes and were not visible clearly. So I headed towards the Python Point and was lucky to view atleast 20 pythons together. By the time I returned back, it beginning to dark and I returned back to my hotel room with enchanting memories of birds.`,
        },
        {
          name: "Lohagarh Fort in Bharatpur",
          description: `Next morning I wanted to visit the Bharatpur bird sanctuary again but time didn't permit me and I headed directly towards the Lohagarh Fort. As soon as I reached there a small kid came to me and offered his services as a guide. I accepted the offer and came to know that it was built in early 18 century and due to its impregnable defense, it sustained British attacks. I explored all the three palaces within its precincts - Kishori Mahal, Mahal Khas and Kothi Khas that left me speechless with their exquisite architecture.`,
        },
        {
          name: "The Palace of Bharatpur",
          description: `My next destination was the palace and it surprised me with its grand look. The architecture exhibited a unique fusion of Mughal and Rajput architectural styles with magnificent apartments and intricately designed floor tiles having interesting patterns.`,
        },
        {
          name: "Government Museum of Bharatpur",
          description: `A museum located in the central pan was a delight to explore. The whole museum was divided into various sections including archaeology, arts, crafts and industry, children gallery and miscellaneous. I was particularly impressed by the collection of paintings, manuscripts, zoological specimens and specimens of miniature paintings on leaves of the peepal tree, mica and old lithopapers.`,
        },
      ],
    },
    {
      name: "Chittaurgarh",
      image: "/images/package24.jpg",
      Overview: [
        {
          name: "Chittaurgarh Tour Package",
          description: `A fabulous place with countless places to see and admire! Here the palaces, forts and other ancient monuments provided me a glimpse of what must have been Rajpitana's greatest citadel. Chittaurgarh was such a wonderful experience that I would cherish for the rest of my life.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best Time to visit</strong>: November-February<br/>
          <strong>Must Visit Attraction</strong>: The Fort <br/>
          <strong>Excursions</strong>: Nagari, Bassi Wildlife Sanctuary, Matri Kundia Temple<br/>
          `,
        },
        {
          name: "A word about Chittaurgarh",
          description: `Chittaurgarh exhibits the pride and glory of Rajasthan in the form of its various forts and monuments. It is a ruined citadel where the royal past lives in the imposing forts, graceful palaces and spectacular chhatris. The entire city echoes with the tales of romance and valor unique to the Rajput tradition.`,
        },
        {
          name: "The Chittaurgarh Fort",
          description: `The trip to this fascinating city began with a visit to the Chittorgarh Fort, which was perched on a height of 180m high hill. I approached the fort on the back of an elephant, which was an exhilarating experience. The main gates to enter into the fort were Padal Pol, Bhairon Pol, Hanuman Pol and Ram Pol. Inside the Chittaurgarh Fort there were exquisitely carved chhatris and tablets that reminded me the Rajput heroism.`,
        },
        {
          name: "Vijay Stambh, Chittaurgarh",
          description: `While driving towards the next destination I came across the magnificent Vijay Stambh. Though I had no plans to visit this but it was such a glorious monument that I decided to pay a short visit. The imposing 37 meter high structure was covered with exquisite sculpture of Hindu deities and depicting episodes from the two great epics- Ramayana and Mahabharata.`,
        },
        {
          name: "Rana Kumbha's Palace",
          description: `Driving through the colorful street of the city, I reached at Rana Kumbha Palace where Rani Padmini and other women committed Jauhar. It was the most massive monument in the fort of Chittaur.`,
        },
      ],
    },
  ],
};

export const ADVENTURE = {
  images: [
    {
      image: getRandomAdventureImage(),
      content: `Make your trip worthwhile`,
    },
    {
      image: getRandomAdventureImage(),
      content: `Top Adventure`,
    },
    {
      image: getRandomAdventureImage(),
      content: `Discover new Places`,
    },
  ],
  data: [
    {
      image: "/images/adventure1.jpg",
      name: "Hot Air Ballooning Ride",
      desc: `Flying of in the air, tethered by a hot air balloon is one of the best adventures to try, truly an experience of a lifetime. When it comes to exploring the beautiful landscape of Rajasthan, a hot air balloon ride is one of the best options. Not just adventurous it’s truly romantic. Soar above the vibrant Pushkar Festival and treat yourself to out-of-the-world views. Jaipur offers sunrise and sunset hot air balloon rides.`,
    },
    {
      image: "/images/adventure7.jpg",
      name: "Camping",
      desc: `Camping in Rajasthan is amazing. Imagine the fun you could have spending the night a tented accommodation under the sky full of stars. Relive your Arabian tale as you try camping in the desert state. Sam sand dunes in Jaisalmer, Pushkar, Bikaner, Samode, and Osian are the most popular of camping areas in the desert state. Desert camps in Rajasthan are set amidst the fascinating sand dunes and under the starlit skies, are something you must try once in life. Offering comfy beddings, luxury amenities and the finest Rajasthani cuisines, these accommodations are an extraordinary experience. Even better is, that there is live entertainment for guests. Folk performers croon their haunting melodies which skilled dances and acrobats show off their talents.`,
    },
    {
      image: "/images/camping4.jpg",
      name: "Desert and Camel Safari",
      desc: `The Thar Desert is the untitled crown of Rajasthan, therefore the most popular adventure in the area is desert safari. Camels, the ship of the desert are the only beasts who can navigate and survive the tough desert conditions. Camel safaris are exciting at you get to sit atop the loving beast and navigate the golden sand dunes. The desert safari tours range from few hours to a couple of weeks. Enjoy the ocean of sand dunes and through rural villages and revealing the spectacular sunset sights. Desert safaris in Rajasthan are popular in the sand dunes of Jaisalmer, Osian, Jodhpur, Bikaner and Pushkar.`,
    },
    {
      image: "/images/adventure4.jpg",
      name: "Wildlife Safari",
      desc: `Apart from safaris to the desert, the desert state offers exhilarating wildlife in India. It has lush pockets of green which are inhabited by wildlife of all kinds. From birds of all kinds, wild ass to roaring Tigers, a plethora of species from the animal world inhabit the wildlife sanctuaries. Formerly the hunting grounds of royalty, these parks are now thriving with wilderness and the excitement to explore it all. Bharatpur National Park in the marshlands of Rajasthan is an UNESCO World Heritage Site, a haven of migratory birds. Ranthambore National Park, Wild Ass Sanctuary, Nahargarh Forests, Jhalana Leopard Reserve, Sariska National Park, etc. are some of the most popular names for the adventure sport in Rajasthan. Enjoy wildlife safari with this package.`,
    },
    {
      image: "/images/adventure5.jpg",
      name: "Paragliding",
      desc: `Flying like a bird is a dream for many and this dream can be fulfilled with paragliding. It can be enjoyed by almost anyone but with a trained expertise. Paragliding in Rajasthan is getting popular among more and more adventure enthusiasts. There are organizers offering the sport in Jaipur, Jodhpur, Jaisalmer and Pushkar. You can fly over the hills of Mount Abu, colorful cities, majestic forts and the golden Thar Desert.`,
    },
    {
      image: "/images/adventure6.jpg",
      name: "Watersports",
      desc: `Rajasthan and water sports do not go hand in hand but you will be surprised to know that Rajasthan does have water activities for you to enjoy. Several cities in Rajasthan have a fair share of water in the form of lakes where you can indulge in boating, gliding, and rafting. It will offer you a great time on your next adventure tour to Rajasthan. Water-sports places in Rajasthan: Ramgarh Lake near Jaipur, Fateh Sagar Lake in Udaipur, rafting in the Gomati River, Siliserh Lake in Alwar.`,
    },
    {
      image: "/images/adventure2.jpg",
      name: "Trekking",
      desc: `Trekking is one of the secret yet quite exciting adventure activities in Rajasthan. The Aravalis in the state offer quite amazing trails. Also, most of the forts are set atop hills, which makes trekking to the indomitable forts all the more exhilarating. On the hill forts trekking trails you can combine adventure with history and incredible sightseeing. Walk through lush green environs, getting to the very top of the fabulous vantage points. Enjoy the view of spots of green, beautiful lakes, etc. In Mount Abu you can trek to the stunning Dilwara Jain temples.`,
    },
    {
      image: "/images/adventure10.jpg",
      name: "Water Sports",
      desc: `There is no dearth of water bodies or lakes in the state of Rajasthan. At present, the activities near lakes are increasing with a drastic number. You can actively participate in these adventurous sports in Rajasthan if you so wish. You can try parasailing or boating on the lakes. Some trainers can guide in this process. The visitors are also provided with life-saving jackets so that they can be prevented from certain risks. However, it is better to know swimming before trying the various types of water sports in Rajasthan. Earlier there were no such options for water sports. But over time, there have been wide options for water sports. The options are a few, but you will certainly enjoy them.`,
    },
    {
      image: "/images/adventure8.jpg",
      name: "Zip Lining",
      desc: `It is another one of the adventure sports to do in Rajasthan that is not for the faint hearted. If you want to explore any place from a certain height, then it will e a wise choice to choose zip line. With the help of a zip line, you can fly high over the outer battlements of Jodhpur. It will be an amazing experience to view the whole place from a great height. You will enjoy every moment and time with this sport adventure. Zip Line is a great way to refresh your body and soul and satisfy your adrenaline rush. You will always relish this beautiful moment in your whole life. Some trainers or instructors can assist you properly in this game.`,
    },
    {
      image: "/images/adventure9.jpg",
      name: "Jeep Safari",
      desc: `A jeep safari is one of the most noted adventure sports in Rajasthan that must be tried by everyone. A simple round in a jeep along the desert will give you a fabulous experience. It is mandatory for the visitors because it will take you to some unexplored destinations. You can also use jeep safari for sightseeing. Most of the people opt for a jeep safari to view the villages of Rajasthan that are hard to explore by any other means. Sometimes, they are also used for exploring the historical monuments of Rajasthan. Jeep safari, dunes, and village jeep safari are quite famous in Rajasthan. Most of such safaris are organized by various hotels and resorts. If you want, you can contact them for such trips.`,
    },
  ],
};

export const CAMPING = {
  images: [
    {
      image: "/images/camping1.jpg",
      content: ` Make your trip worthwhile`,
    },
    {
      image: "/images/adventure7.jpg",
      content: `Top Adventure`,
    },
    {
      image: "/images/camping3.jpg",
      content: `Discover new Places`,
    },
  ],
  data: [
    {
      image: "/images/adventure7.jpg",
      name: "Luxury overnight safari",
      desc: `While desert safaris are a great way to get off the beaten path, they can be uncomfortable and leave travelers less than well-rested. This overnight desert safari solves that problem by offering sleeping quarters in luxury tents. Head out deep into the desert, enjoy a “Rajasthani welcome,” camel rides, a Jeep safari, and dinner—and have a full night’s rest in a real bed.`,
    },
    {
      image: "/images/camping4.jpg",
      name: "Two-Night Camel Safari and Desert Camping",
      desc: `Experience true desert life with our two-night camel safari! Perfect for adventurous explorers, allowing you to explore hidden gems among the desert dunes and immerse yourself in desert life. With more time, you will have the chance to really delve into the secrets of the Thar Desert - perhaps meeting local communities or catching glimpses of native wildlife, and witnessing incredible sunsets and sunrises. With jeep back up, delicious food and safe drinking water, our safaris are the perfect way to explore the desert in comfort and style, with clean, comfortable bedding to sleep in at the end of each day. We are a family owned camel safari and desert camping tour operator based in Jaisalmer and the Thar desert, passionate about providing the best possible experience for our customers. We treat our camel friends like members of the family and put animal welfare and customer experience at the heart of our business.`,
    },
    {
      image: "/images/camel1.jpg",
      name: "Overnight Camel Safari at Non-Touristic Route",
      desc: `Enjoy the peace and quiet of the Thar Desert without the crowds of other tourists when you join an overnight camel safari on less-visited routes. You’ll be picked up in Jaisalmer in the mid-afternoon and driven out to the desert. Take a scenic sunset camel ride over the dunes before gathering around the camp bonfire to eat a freshly cooked dinner and relaxing for the night.`,
    },
    {
      image: "/images/guide1.jpg",
      name: "Jaipur Trekking and Hiking Tour with Guide",
      desc: `Get off the beaten track and explore the valleys and forests surrounding Jaipur during this guided sunrise trekking excursion. Listen to a lively overview of the region from an English-speaking trekking guide. Spot local flora and fauna and observe shepherds and their herds. Hiking routes are suitable for all levels, including beginners.`,
    },
    {
      image: "/images/adventure7.jpg",
      name: "Overnight Stay in a luxury Camp with a cultural show & dinner",
      desc: `The massive Thar Desert and its “ghost” villages need to be seen to be believed. On this discovery tour, you’ll start your journey at an abandoned 18th-century outpost, hearing wild stories of the past. You’ll move to a modern-day village, meeting locals, exploring the dunes, and enjoying a meal prepared by your desert guide over the campfire. As night falls, watch the stars before adjourning to your luxury tent.`,
    },
    {
      image: "/images/adventure9.jpg",
      name: "Desert Camel & Jeep Safari Private Tour From Jodhpur",
      desc: `This tour takes you far away from the bustling life of Jodhpur city to the tranquility of golden sand dunes where you can enjoy desert safari, sunset view, Rajasthani cooked dinner and Rajasthani Culture Folk Dance. Your tour starts with pickup in Jodhpur at your hotel, or the airport, train station or bus station. Travel by private car to Osian where you have the chance to independently visit the Sachiya Mata Temple. After taking in the temple, head to the starting point for the camel safari. The camel ride is considered a peak experience in Rajasthan. Stay to watch the skies and sands change colors during the sunset hour, then return to your private vehicle for transfer back to Jodhpur.`,
    },
  ],
};

export const RAJASTHANDISTRICTS = [
  "Ajmer",
  "Alwar",
  "Anupgarh",
  "Balotra",
  "Baran",
  "Barmer",
  "Beawar",
  "Bharatpur",
  "Bhilwara",
  "Bhiwadi",
  "Bikaner",
  "Bundi",
  "Chittorgarh",
  "Churu",
  "Dausa",
  "Dholpur",
  "Didwana-Kuchaman",
  "Dungarpur",
  "Ganganagar",
  "Gangapur City",
  "Hanumangarh",
  "Jaipur",
  "Jaisalmer",
  "Jalore",
  "Jhalawar",
  "Jhunjhunu",
  "Jodhpur",
  "Karauli",
  "Kekri",
  "Kota",
  "Kotputli-Behror",
  "Nagaur",
  "Neem Ka Thana",
  "Pali",
  "Phalodi",
  "Pratapgarh",
  "Rajsamand",
  "Salumbar",
  "Sanchore",
  "Sawai Madhopur",
  "Sikar",
  "Sirohi",
  "Sri Ganganagar",
  "Sri Karanpur",
  "Tonk",
  "Udaipur",
];

export const BLOGS = [
  {
    BlogTitle: "10 Must-Visit Places in India for First-Time Travelers",
    MetaTitle: "Top 10 Must-Visit Destinations in India",
    MetaDescription:
      "Planning your first trip to India? Discover the top 10 destinations you shouldn't miss, from the Taj Mahal to Kerala's backwaters.",
    ContentSummary:
      "This blog will guide travelers through the most iconic spots across India with brief travel tips and booking suggestions.",
  },
  {
    BlogTitle: "Best Time to Travel India by Region",
    MetaTitle: "When to Visit India: Seasonal Travel Guide",
    MetaDescription:
      "Discover the best time to visit each region of India—North, South, East, and West—for the perfect vacation.",
    ContentSummary:
      "Breakdown of travel seasons with recommendations on when to visit various regions based on weather and festivals.",
  },
  {
    BlogTitle: "How to Book Train Tickets Online Easily in India",
    MetaTitle: "Guide to Booking Train Tickets Online in India",
    MetaDescription:
      "Step-by-step guide to booking train tickets online through IRCTC or affiliate portals for a hassle-free experience.",
    ContentSummary:
      "Includes screenshots and simple steps to make the booking process easier for users.",
  },
  {
    BlogTitle: "Cheapest Flights from Major Indian Cities",
    MetaTitle: "Affordable Domestic Flights in India",
    MetaDescription:
      "Find the cheapest flight options from Delhi, Mumbai, Bengaluru, and other major Indian cities.",
    ContentSummary:
      "Updated flight booking tips, suggested platforms (your affiliate), and tips for getting deals.",
  },
  {
    BlogTitle: "How to Plan a Budget Trip Across India",
    MetaTitle: "Budget Travel Tips for India",
    MetaDescription:
      "Learn how to explore India on a budget—cheap transport, stays, and food options included.",
    ContentSummary:
      "Tips for backpackers and students with estimated costs and travel hacks.",
  },
  {
    BlogTitle: "Explore Indian Culture: What Every Tourist Should Know",
    MetaTitle: "Guide to Indian Culture for Travelers",
    MetaDescription:
      "Explore the diverse cultures of India and the dos and don’ts to follow while traveling.",
    ContentSummary:
      "Cultural etiquette, food habits, dress codes, and how to interact respectfully with locals.",
  },
  {
    BlogTitle: "7 Scenic Train Routes in India You Must Experience",
    MetaTitle: "India’s Most Scenic Train Journeys",
    MetaDescription:
      "From the Darjeeling Himalayan Railway to the Konkan Coast, discover India’s most beautiful train routes.",
    ContentSummary:
      "Promotes your train booking section through experiential content.",
  },
  {
    BlogTitle: "Hotel Booking Tips: What to Check Before You Book",
    MetaTitle: "Tips for Booking Hotels in India",
    MetaDescription:
      "Learn how to book the right hotel in India with safety, amenities, and price in mind.",
    ContentSummary:
      "Affiliate-linked blog offering useful suggestions and highlighting your site’s booking section.",
  },
  {
    BlogTitle: "Travel Insurance in India: Is It Worth It?",
    MetaTitle: "Should You Buy Travel Insurance for India?",
    MetaDescription:
      "Explore the benefits of buying travel insurance for trips across India.",
    ContentSummary:
      "A breakdown of when and why travel insurance is recommended, possibly linking to insurance services you offer.",
  },
  {
    BlogTitle: "Ride-Hailing in India: Compare Ola, Uber & Rapido",
    MetaTitle: "Best Ride Apps in India: Ola vs Uber vs Rapido",
    MetaDescription:
      "Compare ride prices, service quality, and safety to choose the best ride app in India.",
    ContentSummary:
      "Connects well with your upcoming ride comparison feature in the app.",
  },
  {
    BlogTitle: "Explore India in 7 Days: A Quick Travel Itinerary",
    MetaTitle: "One-Week India Travel Plan for Beginners",
    MetaDescription:
      "Only have 7 days in India? Here’s a complete itinerary to help you cover top spots efficiently.",
    ContentSummary:
      "Combines flights, trains, and hotel info into one friendly guide.",
  },
  {
    BlogTitle: "How to Choose a Tour Package Online",
    MetaTitle: "Guide to Booking Tour Packages in India",
    MetaDescription:
      "Looking for a complete vacation plan? Learn how to choose a tour package that fits your needs and budget.",
    ContentSummary:
      "Introduces ExploreIndiaView’s future offerings for package tours.",
  },
  {
    BlogTitle: "Indian Street Food You Must Try",
    MetaTitle: "12 Must-Try Indian Street Foods",
    MetaDescription:
      "From Delhi’s chaat to Kolkata’s rolls—here are the best street foods you can’t miss.",
    ContentSummary:
      "Engaging foodie content for readers, possibly linking to travel suggestions.",
  },
  {
    BlogTitle: "Top Indian Festivals to Plan Your Trip Around",
    MetaTitle: "Best Time to Visit India Based on Festivals",
    MetaDescription:
      "Celebrate India’s vibrant festivals—from Diwali to Holi—with this cultural guide.",
    ContentSummary:
      "Encourages users to time their bookings using your platform.",
  },
  {
    BlogTitle: "How to Stay Safe While Traveling in India",
    MetaTitle: "Travel Safety Tips for Visiting India",
    MetaDescription:
      "Stay informed and safe with these must-know tips for solo and group travelers in India.",
    ContentSummary:
      "Builds trust with your audience and encourages bookings from first-time travelers.",
  },
];
