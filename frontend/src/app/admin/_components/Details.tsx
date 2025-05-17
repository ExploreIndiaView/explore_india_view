import { API_URL } from "@/services/API";
import { DETAILTYPES } from "@/services/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Details({ token }: { token: string }) {
  const [details, setDetails] = useState<DETAILTYPES | null>(null);
  const [loading, setloading] = useState(false);

  // fetch CardDetails
  const fetchDetails = async () => {
    try {
      setloading(true);
      const response = await axios.get(`${API_URL}/api/v1/query/getDetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 400) throw new Error(response.data.message);
      setDetails(response.data.details);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [token]);
  if(loading) return
  return (
    details && (
      <div className="p-4 grid grid-cols-3 gap-3 lg:grid-cols-5">
        {details &&
          Object.keys(details).map((key, idx) => (
            <div key={idx} className="px-3 lg:px-10 py-5 border rounded-xl shadow-lg ">
              <h3 className="font-bold text-xl text-center">{key}</h3>
              <p className="text-center text-lg font-bold">{(details as Record<string, any>)[key]}</p>
            </div>
          ))}
      </div>
    )
  );
}

export default Details;
