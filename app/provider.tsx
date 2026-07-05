"use client";

import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

import { UserDetailContext } from "@/context/UserDetailContext";
import { TripDetailContext } from "@/context/TripDetailContext";

import type { TripInfo } from "./create-new-trip/_components/ChatBox";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createUser = useMutation(api.user.CreateNewUser);

  const [userDetail, setUserDetail] = useState<any>(null);

  const [tripDetailInfo, setTripDetailInfo] =
    useState<TripInfo | null>(null);

  const { user, isLoaded } = useUser();

  const createNewUser = useCallback(async () => {
    if (!user) return;

    try {
      const result = await createUser({
        email:
          user.primaryEmailAddress?.emailAddress ?? "",

        imageURL:
          user.imageUrl ?? "",

        name:
          user.fullName ?? "",
      });

      setUserDetail(result);
    } catch (error) {
      console.error(
        "Failed to create or fetch user:",
        error
      );
    }
  }, [createUser, user]);

  useEffect(() => {
    if (isLoaded && user) {
      void createNewUser();
    }
  }, [createNewUser, isLoaded, user]);

  return (
    <UserDetailContext.Provider
      value={{
        userDetail,
        setUserDetail,
      }}
    >
      <TripDetailContext.Provider
        value={{
          tripDetailInfo,
          setTripDetailInfo,
        }}
      >
        <Header />

        {children}
      </TripDetailContext.Provider>
    </UserDetailContext.Provider>
  );
}

export default Provider;

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};

export const useTripDetail = () => {
  return useContext(TripDetailContext);
};