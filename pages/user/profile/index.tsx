import type { NextPage } from "next";
import { ProtectedRoute } from "../../../lib/components/ProtectedRoute";

interface Props {}

const UserProfilePage: NextPage<Props> = () => {
  return (
    <ProtectedRoute>
      <h1>hello UserProfilePage</h1>
    </ProtectedRoute>
  );
};

export default UserProfilePage;
