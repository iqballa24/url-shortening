import { Fragment, useEffect, useRef } from "react";
import { HeroSection, MainSection } from "../components/Homepage";
import useLocalStorage from "../hooks/useLocalStorage";

import { useAppDispatch, useAppSelector } from "../hook";
import { shortlinkActions } from "../store/shortlink-slice";
import { fetchShortenLinkData } from "../store/shortlink-action";
import { RootState } from "../store";

const Homepage = () => {
  const dispatch = useAppDispatch();
  const { initialData, saveToLocalStorage } =
    useLocalStorage("shortenLinkhistory");
  const data = useAppSelector((state: RootState) => state.shortLink.items);

  const targetScroll = useRef<HTMLDivElement>(null);
  const executeScroll = () => targetScroll.current!.scrollIntoView();

  useEffect(() => {
    saveToLocalStorage(initialData);
    dispatch(shortlinkActions.storedDataStorage(initialData));
  }, []);

  useEffect(() => {
    saveToLocalStorage([...data]);
  }, [data]);

  const onSubmitShortenBtn = async (data: string) => {
    dispatch(shortlinkActions.changeStateLoading(true));
    await dispatch(fetchShortenLinkData(data));
    dispatch(shortlinkActions.changeStateLoading(false));
  };

  return (
    <Fragment>
      <HeroSection onClick={executeScroll} />
      <MainSection
        ref={targetScroll}
        data={data}
        onSubmit={onSubmitShortenBtn}
      />
    </Fragment>
  );
};

export default Homepage;
