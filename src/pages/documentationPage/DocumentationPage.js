import React from "react";

import { Layout } from "../../hocs/Layout";

import {
  DocumentationHeading,
  DocumentationInputBox,
  Dropdowns,
  Card,
} from "../../components";
import { DROPDOWN_TITLES } from "../../constants";

import "./documentation-styles.css";

export const DocumentationPage = () => {
  return (
    <Layout>
      <div className="whole-document">
        <DocumentationHeading />
        <DocumentationInputBox />
        <div className="dropdown-mobile">
          <Dropdowns />
        </div>
        <div className="pokedex-dropdowns">
          {DROPDOWN_TITLES.map((title) => (
            <Dropdowns name={title} />
          ))}
        </div>
        <Card />
      </div>
    </Layout>
  );
};
