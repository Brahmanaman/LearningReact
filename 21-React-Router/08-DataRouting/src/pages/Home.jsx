import { useLoaderData } from "react-router";

const Home = () => {
  console.log("home hit");
  let products = useLoaderData();
  console.log(products);

  return (
    <>
      <h1>this is my home</h1>
    </>
  );
};

export default Home;
