export default async function getAllPosts(){
    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
        next:{
            revalidate:10,
        }
    }
    );
    if(!result.ok){
        throw new Error("Error in Fatching data...")
    }
    return result.json();
}