import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
const Tabs = ({ children }) => {
  const defaultTab = 1;
  const tabs = React.Children.toArray(children);
  const tabsTiles = tabs.map((t) => t.props.title || "");

  const tabsContent = tabs.map((t) => t.props.children);
  const [activTab, setActivTab] = useState(defaultTab);

  return (
    <Container maxWidth="lg" className="mt-[30px]">
      <div className="flex justify-center">
        {tabsTiles.map((title, ix) => (
          <div
            key={ix + 1}
            className={`h-[60px] w-[250px] flex justify-center items-center bg-blue-800 m-1 ${
              activTab === ix + 1 ? "activ" : ""
            }`}
            onClick={() => setActivTab(ix + 1)}
          >
            <h1>{title}</h1>
          </div>
        ))}
      </div>
      <div>
        <h1>{tabsContent[activTab - 1]}</h1>
      </div>
    </Container>
  );
};

export default Tabs;
