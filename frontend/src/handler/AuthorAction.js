import { AuthorWrite } from "../services/AuthorWrite";

export const AuthorAction = async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const category = formData.get("category");
    const content = formData.get("content");
    const author = formData.get("author");
    if(!title || !category || !content || !author) 
    {
        throw Error("All fields required")
    }
    try {
       const data = await AuthorWrite(title, category, content, author);
        if (!data) {
            throw Error("Failed to submit the form")
        }
        return{data : data}
    }   
    catch (error) {
        console.log("Error:", error);
        return { error: "Failed to submit the form" };
    }
}