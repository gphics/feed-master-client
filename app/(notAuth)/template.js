"use client";
import Head from "next/head";
import LoadingComponent from "@/components/LoadingComponent";
import { useSelector } from "react-redux";
function Template({ children }) {
  const { isLoading } = useSelector((state) => state.defaultSlice);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {isLoading && <LoadingComponent />}
      {children}
    </>
  );
}

export default Template;
