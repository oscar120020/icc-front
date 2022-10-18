import React from "react";
import { useScrollTrigger } from "@mui/material";

interface Props {
  window: () => Window | undefined;
  children: React.ReactElement;
  noDinamicElevation?: boolean;
}

export const ElevationScroll = (props: Props) => {
  const { children, window, noDinamicElevation } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  if (noDinamicElevation) {
    return React.cloneElement(children, {
      elevation: 1,
      sx: {
        height: 60,
        backgroundColor: "white",
      },
    });
  }

  return React.cloneElement(children, {
    elevation: trigger ? 3 : 0,
    sx: {
      height: trigger ? 70 : 60,
      backgroundColor: trigger ? "white" : "transparent",
    },
  });
};
