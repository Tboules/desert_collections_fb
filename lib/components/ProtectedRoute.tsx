import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";

export const ProtectedRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const { userRecord, user } = useUserContext();

  useEffect(() => {
    if (!user) {
      router.push("/user/auth");
    }

    if (user && !userRecord) {
      router.push("/user/create-profile");
    }

    setLoading(false);
  }, [userRecord, user, loading, router]);

  return <>{!loading && children}</>;
};
