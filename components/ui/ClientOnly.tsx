import React, { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ClientOnly = ({ children }: Props) => {
  const isClient = useRef(false);

  useEffect(() => {
    isClient.current = true
  }, [])

  if(isClient.current) {
    return null
  }

  return <>{children}</>;
};
