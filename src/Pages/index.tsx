import SearchSelect from "@/components/Select/SearchSelect";
import RootProvider from "../app/RootProvider";
import SelectReact from "@/components/SelectReact/SelectReact";
import Main from "@/components/Main/Main";

const Home: React.FC = () => {
  return (
    <RootProvider>
      <Main />
    </RootProvider>
  );
};

export default Home;
