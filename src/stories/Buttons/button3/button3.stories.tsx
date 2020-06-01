import React from "react";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";
import { ButtonComponent } from "ui";

export default { title: "Buttons", decorators: [withKnobs] };

export const Button3 = () => (
    <ButtonComponent
      width={number("Width", 100)}
      height={number("Height", 50)}
      backgroundColor={color("BackgroundColor", "#49F1FF")}
      textColor={color("TextColor", "#FFFFFF")}
    >
      {text("Label", "label")}
    </ButtonComponent>
  );
