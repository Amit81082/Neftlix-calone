import useSWR, { mutate } from "swr";
import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    user: data,
    isLoading,
    isError: error,
    mutate,
  };
};



export default useCurrentUser;
