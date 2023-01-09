"use client";
import { useCallback } from "react";
import Contact, { ContactProps } from "components/Contact";

export default function Page(): JSX.Element {
  const handleSubmit = useCallback<ContactProps["onSubmit"]>((values) => {
    console.log(values);
  }, []);

  return <Contact onSubmit={handleSubmit} />;
}
