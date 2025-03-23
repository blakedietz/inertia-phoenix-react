import { PageProps } from "@inertiajs/core";
import { usePage } from "@inertiajs/react";

interface CurrentUser {
  id: string;
  email: string;
  confirmed_at: string | null;
}

export function useCurrentUser() {
  const { props } = usePage<PageProps & { current_user: CurrentUser }>();
  return props.current_user;
}

export type { CurrentUser };
