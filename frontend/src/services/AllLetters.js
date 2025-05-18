export const getAllLetters = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/all-letters",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.log(error, "error fetching letters");
    throw Error(error);
  }
};

export const getGoodMorning = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/good-morning",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.log(error, "error fetching letters");
    throw Error(error);
  }
};

export const getGoodNight = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/good-night",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getLoveLetters = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/love-letters",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getMotivation = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/motivation",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getPoems = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/poems",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getMotherHood = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/mother-hood",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getFatherHood = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/father-hood",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getBirthday = async () => {
  try {
    const response = await fetch(
      "https://worldiniteself.onrender.com/api/birthday",
      {
        method: "GET",
        headers: {
          "Content-Type": "application",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};
