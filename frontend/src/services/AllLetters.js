export const getAllLetters = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/all-letters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    const response = await fetch("http://localhost:4000/api/good-morning", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    const data = await fetch("http://localhost:4000/api/good-night", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
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
    const data = await fetch("http://localhost:4000/api/love-letters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
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
    const data = await fetch("http://localhost:4000/api/motivation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
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
    const data = await fetch("http://localhost:4000/api/poems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = data.json();
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
    const data = await fetch("http://localhost:4000/api/mother-hood", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
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
    const data = await fetch("http://localhost:4000/api/father-hood", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
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
    const data = await fetch("http://localhost:4000/api/birthday", {
      method: "GET",
      headers: {
        "Content-Type": "application",
      },
    });
    const response = await data.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};
