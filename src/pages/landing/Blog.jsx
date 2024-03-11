import React from "react";
import { BlogList } from "./component/BlogSection";
import Header from "../../layouts/landing/Header";
import Footer from "../../layouts/landing/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Blog;
