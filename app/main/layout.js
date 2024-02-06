"use client";
import Head from "next/head";
import LoadingComponent from "@/components/LoadingComponent";
import { defaultSliceActions } from "@/slices/defaultSlice";
import { userSliceActions } from "@/slices/userSlice";
import fetchData from "@/utils/fetchData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
export default function Template({ children }) {
  const dispatch = useDispatch();
  const { setIsLoading } = defaultSliceActions;
  const { isLoading } = useSelector((state) => state.defaultSlice);

  const router = useRouter();
  async function fetchUser() {
    dispatch(setIsLoading(true));
    const result = await fetchData("user");

    if (result) {
      const { data, err } = result;
      dispatch(setIsLoading(false));
      if (err) {
        toast.error(err.message, { theme: "dark" });
      } else {
        const { createdAt, updatedAt } = data;
        if (createdAt === updatedAt) {
          router.push("/main/profile/update");
        }
      }
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
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
