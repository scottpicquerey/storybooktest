import React from "react";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";
import { ButtonComponent } from "ui";

export default { title: "Buttons", decorators: [withKnobs] };

export const Button2 = () => {
  const width = number("Width", 100);
  const height = number("Height", 50);
  const backgroundColor = color("BackgroundColor", "#49F1FF");
  const textColor = color("TextColor", "#FFFFFF");
  const label = text("Label", "label");

  return (
    <ButtonComponent
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {label}
    </ButtonComponent>
  );
};
