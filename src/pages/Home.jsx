import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, Postcard } from "../components";

const Home = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      console.log("POSTS", posts);
      if (posts) setposts(posts.documents);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard {...post} /> 
              {/*This and below both are sameTo Do:
              check difference
              {/* <Postcard post={post} /> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
