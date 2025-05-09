export const AuthorWrite = async (title, category, content, author) => {
    try {
        const response = await fetch("https://worldiniteself.onrender.com/api/author-write", {
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
        throw Error(error)
    }
}