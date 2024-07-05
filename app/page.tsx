import { Grid } from "@radix-ui/themes";
import AddPost from "./AddPost";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Storys from "./Storys";
const Home = () => {
  return (
    <Grid rows="70px 1fr" className="h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <Grid
        className="max-w-screen-2xl mx-auto px-4 h-full md:h-[calc(100vh-70px)] overflow-auto"
        columns={{ initial: "1fr", sm: "1fr 2fr", md: "4fr 11fr 4fr" }}
        gap="5"
      >
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="py-6 overflow-auto space-y-7">
          <Storys />
          <AddPost />
          <Posts />
        </div>
        <div className="hidden lg:block">
          <div className="py-6 overflow-auto">info</div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
