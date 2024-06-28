import { Grid } from "@radix-ui/themes";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";
const Home = () => {
  return (
    <>
      <Navbar />
      <Grid
        className="max-w-screen-2xl mx-auto px-6 h-[calc(100vh-70px)]"
        columns={{ initial: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
      >
        <Sidebar />
        <Feeds />
        <div className="py-6 overflow-auto">info</div>
      </Grid>
    </>
  );
};

export default Home;
