export interface RootState {
  ui: {
    navModalIsShow: boolean;
  };
  shortLink: {
    items: ItemsProps
  }
}

export interface ItemsProps {
  id: number;
  shortUrl: string;
  longUrl: string;
}

export interface ErrorProps {
  message: string;
  status: boolean;
}

export interface InitialProps {
  items: ItemsProps[];
  error: ErrorProps;
  loading: boolean;
}
