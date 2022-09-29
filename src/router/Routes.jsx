import { Route, Switch } from "react-router-dom";

// Main Preview Pages
import PreviewMain from "../views/Dashboard";
import Cars from "../views/Cars";

// Not Found Page
import NotFound from "../views/NotFound";

// Route Specific
const RoutesC = ({ search }) => {
  return (
    <Switch>
      <Route exact path="/" component={PreviewMain} />
      <Route exact path="/cars" component={() => <Cars search={search} />} />
      <Route path="/404" component={NotFound} />
      {/* NotFound Route */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default RoutesC;
