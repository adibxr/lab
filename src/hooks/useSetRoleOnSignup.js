import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function useSetRoleOnSignup(role) {
  const { isSignedIn, user } = useUser();
  useEffect(() => {
    if (isSignedIn && user && user.publicMetadata.role !== role) {
      user.update({
        publicMetadata: { role }
      });
    }
  }, [isSignedIn, user, role]);
}