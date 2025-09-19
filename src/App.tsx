import { Outlet } from "react-router-dom";
import { Layout } from "./components/layout";

function App() {
  return (
    <div className="flex justify-center">
      <Layout>
        <Outlet/>
      </Layout>
    </div>
  );
}

export default App;
