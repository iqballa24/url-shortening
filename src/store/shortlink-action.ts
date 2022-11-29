import { shortlinkActions } from "./shortlink-slice";
import useFetch from "../hooks/useFetch";

export const fetchShortenLinkData = (url: string) => {
  return async (dispatch: any) => {
    if (!url) {
      return dispatch(
        shortlinkActions.changeStateError({
          message: "Please fill out the field and enter a valid URL",
          status: true,
        })
      );
    }

    const res = await useFetch(url);

    if (!res.ok) {
      return dispatch(
        shortlinkActions.changeStateError({
          message: res.error,
          status: true,
        })
      );
    }

    dispatch(
      shortlinkActions.addItemToData({
        shortUrl: res.result.short_link,
        longUrl: res.result.original_link,
      })
    );

    dispatch(
      shortlinkActions.changeStateError({
        message: "",
        status: false,
      })
    );
  };
};
