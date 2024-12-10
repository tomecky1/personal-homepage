import {ErrorBox} from "./ErrorBox/ErrorBox.jsx";
import {Repositories} from "./Repositories/Repositories.jsx";
import {Loading} from "./Loading/Loading.jsx";

export const Content = ({status, repositories}) => {
  switch (status) {
    case 'initial':
      return null;

    case 'loading':
      return <Loading/>;

    case 'error':
      return <ErrorBox/>;

    case 'success':
      return <Repositories repositories={repositories}/>;

    default:
      throw new Error(`Unknown status: ${status}`);
  }
};