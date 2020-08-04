const URL = "http://localhost:3001/api/v1/urls";

export const getUrls = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert(`Server Error. It's not your fault the error is: ${error}`);
  }
};

export const postUrl = async (obj) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
    return response.json()
  } catch (error) {
    window.alert(`Server Error. It's not your fault the error is: ${error}`);
  }
}
