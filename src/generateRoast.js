const COHERE_API_KEY = "FF1Wpg7J0D7LYjDsMxgYAe3c0VDf6PV0ENnz6bi2"; // Put in .env for prod!

export const generateRoast = async (formData) => {
  const prompt = `Roast this person based on the following:
Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Location: ${formData.locality}
Religion: ${formData.religion}
Occupation: ${formData.occupation}
Hobbies: ${formData.hobbies}
Relationship Status: ${formData.relationshipStatus}
Most embarrassing moment: ${formData.embarrassingMoment}
Make it super savage, dark-humor, and brutally hilarious.`;

  try {
    const res = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command", // ✅ This is valid
        prompt,
        max_tokens: 200,
        temperature: 0.9,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: "NONE"
      }),
    });

    const data = await res.json();
    console.log("Cohere API Response:", data);

    return data.generations?.[0]?.text || "Cohere held back... probably out of pity.";
  } catch (err) {
    console.error("Cohere API Error:", err);
    return "Something went wrong. The roast gods are silent.";
  }
};
