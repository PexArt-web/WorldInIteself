const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AuthorWrite = async (title, category, content, author) => {
    try {
        const response = await fetch(`${API_BASE_URL}/author-write`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, category, content, author }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return data;
    }
    catch (error) {
        console.log(error, "error saving data")
        throw Error(error)
    }
}