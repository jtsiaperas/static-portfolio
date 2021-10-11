import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "J. Austin Tsiaperas",
  github: "https://github.com/jtsiaperas",
  linkedin: "https://www.linkedin.com/in/j-austin-tsiaperas/",
};

story.add("Footer", () => <Footer {...data} />);
