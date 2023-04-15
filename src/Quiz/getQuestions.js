import { useState, useEffect } from "react";

export const useData = () => {
  const [data, setData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/reactheo/questions.json");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const questions = await response.json();
        setData({
          questions,
          status: "success",
        });
      } catch (error) {
        console.error("Ups... Coś złego się stało!🤨", error);
        setData({
          status: "error",
        });
      }
    };

    setTimeout(getData, 3000);
  }, []);

  return data;
};
