import { Grid } from "@radix-ui/themes";
import AddPost from "./AddPost";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Storys from "./Storys";
const Home = () => {
  return (
    <>
      <Navbar />
      <Grid
        className="max-w-screen-2xl mx-auto px-6 h-full md:h-[calc(100vh-70px)]"
        columns={{ initial: "1fr", sm: "1fr 1fr", md: "2fr 3fr 2fr" }}
        gap="5"
      >
        <Sidebar />
        <div className="py-6 overflow-auto space-y-7">
          <Storys />
          <AddPost />
          <Posts />
        </div>
        <div className="py-6 overflow-auto">info</div>
      </Grid>
    </>
  );
};

export default Home;
