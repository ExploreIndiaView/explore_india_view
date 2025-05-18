"use client";
import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, Expand } from "lucide-react";

const packageRedirectKeywords = ["package", "tour", "holiday"];
const hotelRedirectKeywords = ["hotel", "stay", "accommodation"];

const packageResponses = [
  "Our packages are designed for every kind of traveler. Would you like to see our latest offers?",
  "We have a variety of tour packages! Redirecting you to our Packages section...",
  "Looking for a memorable trip? Check out our curated packages.",
];

const hotelResponses = [
  "We offer hotels from budget to luxury. Redirecting you to our Hotels section...",
  "Find the best stays with us! Taking you to the Hotels section.",
  "Need a place to stay? Let me show you our hotel options.",
];

const generalResponses = [
  "I can help you with bookings, travel tips, and more. What would you like to do?",
  "Feel free to ask about flights, trains, hotels, or packages!",
  "I'm here to assist you with your travel plans. How can I help?",
  "You can ask me about car rentals, sightseeing, or anything else related to your trip.",
];

const travelServices = {
  "Flight Booking": [
    "Domestic flights",
    "International flights",
    "Round-trip flights",
    "One-way flights",
    "Flight + hotel packages",
  ],
  "Train Booking": [
    "Rajdhani Express",
    "Shatabdi Express",
    "Duronto Express",
    "Local trains",
    "Tourist special trains",
  ],
  "Bike and Car Rental": [
    "Self-drive cars",
    "Chauffeur-driven cars",
    "Motorcycle rentals",
    "Scooter rentals",
    "Long-term rentals",
  ],
  "Hotel Booking": [
    "Luxury hotels",
    "Budget hotels",
    "Heritage properties",
    "Resorts",
    "Homestays",
  ],
  "Package Booking": [
    "Golden Triangle (Delhi-Agra-Jaipur)",
    "Rajasthan cultural tour",
    "Jaipur city tour",
    "Weekend getaways",
    "Customized packages",
  ],
};

const quickReplies = [
  "Show me tour packages",
  "Find hotels in Jaipur",
  "How do I book a flight?",
  "What are your hotel options in Jaipur?",
  "Can I get a car with driver?",
  "What's included in your tour packages?",
  "How can I cancel a booking?",
  "Contact support",
];

const ChatBotPopover = ({ open }: { open: boolean }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [messages, setMessages] = useState<
    {
      id: number;
      text: string;
      sender: string;
      options?: string[];
      redirect?: string;
    }[]
  >([
    {
      id: 1,
      text: "Hello! I'm your travel assistant from Explore India View. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showServices, setShowServices] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };
    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const generateBotResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    let responseText = "";
    let responseOptions: string[] = [];
    let redirect: string | undefined = undefined;

    // Package section redirection
    if (packageRedirectKeywords.some((k) => lowerInput.includes(k))) {
      responseText =
        packageResponses[Math.floor(Math.random() * packageResponses.length)];
      redirect = "packages";
    }
    // Hotel section redirection
    else if (hotelRedirectKeywords.some((k) => lowerInput.includes(k))) {
      responseText =
        hotelResponses[Math.floor(Math.random() * hotelResponses.length)];
      redirect = "hotels";
    }
    // ...existing logic for flights, trains, etc...
    else if (lowerInput.includes("flight") || lowerInput.includes("fly")) {
      responseText =
        "We can certainly help with flight bookings! Here are some options:";
      responseOptions = travelServices["Flight Booking"];
      redirect = "flight";
    } else if (lowerInput.includes("train") || lowerInput.includes("rail")) {
      responseText =
        "We offer various train booking services. Here are some options:";
      responseOptions = travelServices["Train Booking"];
      redirect = "train";
    } else if (
      lowerInput.includes("car") ||
      lowerInput.includes("bike") ||
      lowerInput.includes("rent")
    ) {
      responseText = "We have excellent rental options. Here are some choices:";
      responseOptions = travelServices["Bike and Car Rental"];
    } else if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      responseText =
        "Hello! Welcome to Explore India View. How can I assist you with your travel plans today?";
    } else if (lowerInput.includes("thank")) {
      responseText =
        "You're welcome! Is there anything else I can help you with?";
    } else if (lowerInput.includes("cancel") || lowerInput.includes("refund")) {
      responseText =
        "For cancellations or refunds, please visit our 'My Bookings' section or contact our customer support at support@exploreindiaview.com";
    } else if (lowerInput.includes("contact") || lowerInput.includes("help")) {
      responseText =
        "You can reach us at:\n- Phone: +91 95880 41628 \n- Email: exploreindiaview@gmail.com\n- Office: Jaipur";
    } else if (
      lowerInput.includes("one day") ||
      lowerInput.includes("day trip") ||
      lowerInput.includes("same day")
    ) {
      responseText =
        "Looking for a one day trip? Redirecting you to our One Day Booking section...";
      redirect = "oneday";
    } else {
      responseText =
        generalResponses[Math.floor(Math.random() * generalResponses.length)];
      setShowServices(true);
    }

    const botMessage = {
      id: messages.length + 2,
      text: responseText,
      sender: "bot",
      options: responseOptions.length > 0 ? responseOptions : undefined,
      redirect: redirect,
    };

    return botMessage;
  };

  useEffect(() => {
    // Check the last message for redirection
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.redirect) {
      setTimeout(() => {
        if (lastMsg.redirect === "packages") {
          window.location.href = "/package";
        } else if (lastMsg.redirect === "hotels") {
          window.location.href = "/hotels";
        } else if (lastMsg.redirect === "flight") {
          window.location.href = "/services/airline";
        } else if (lastMsg.redirect === "train") {
          window.location.href = "/services/train";
        } else if (lastMsg.redirect === "oneday") {
          window.location.href = "/services/onedaytour";
        }
      }, 1500); // Give user time to read the message
    }
  }, [messages]);

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    // Auto-send the quick reply
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleServiceSelect = (service: string) => {
    const userMessage = {
      id: messages.length + 1,
      text: service,
      sender: "user",
    };
    setMessages([...messages, userMessage]);
    setShowServices(false);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: `Great choice! To book "${service}", please visit our ${
          service.includes("flight")
            ? "Flights"
            : service.includes("train")
            ? "Trains"
            : service.includes("car") || service.includes("bike")
            ? "Rentals"
            : service.includes("hotel")
            ? "Hotels"
            : "Packages"
        } section or would you like me to guide you through the process?`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  // Simple newline to <br> converter for basic formatting
  const formatMessage = (text: string) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-72 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          <div className="bg-orange-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-bold">Explore India View Assistant</h3>
            {/* <button
              onClick={() => {
                window.open("/chatbot", "_blank");
              }}
            >
              <Expand size={20} />
            </button> */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange-200"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto bg-gray-50 max-h-[500px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-orange-500 text-white rounded-tr-none"
                      : "bg-white border border-gray-200 rounded-tl-none"
                  }`}
                >
                  {formatMessage(message.text)}
                  {message.options && (
                    <div className="mt-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleServiceSelect(option)}
                          className="block w-full text-left p-2 my-1 bg-orange-100 hover:bg-orange-200 rounded text-sm text-orange-800"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {showServices && (
            <div className="p-3 bg-gray-100 border-t">
              <p className="text-sm font-medium mb-2 text-gray-700">
                Select a service:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(travelServices).map((service) => (
                  <button
                    key={service}
                    onClick={() => handleServiceSelect(service)}
                    className="p-2 bg-white border border-orange-300 hover:bg-orange-50 rounded text-xs text-center"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-3 bg-white border-t">
            <div className="flex gap-2 mb-2 overflow-x-auto">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="whitespace-nowrap px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs"
                >
                  {reply}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-orange-500 text-white rounded hover:bg-orange-700"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="size-18 27xl:size-25 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-700 transition-all"
        >
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBotPopover;
