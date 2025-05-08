export const AuthorWrite = async (title, category, content, author) => {
    try {
        const response = await fetch("http://localhost:4000/api/author-write", {
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
        console.log("Error in AuthorWrite:", error.message);
        throw Error(error)
    }
}