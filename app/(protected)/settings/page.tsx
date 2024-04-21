"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-5 rounded-xl">
      <button type="submit" onClick={onClick}>
        SIGN OUT
      </button>
    </div>
  );
};

export default SettingsPage;
