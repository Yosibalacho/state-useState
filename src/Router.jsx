import { Gallery, Videos, HomePage } from "./component/pages"
export default function Router(props) {
  switch (props.pageNum) {
    case "HomePage":
      return <HomePage />;
    case "Gallery":
      return <Gallery />;
    case "Videos":
      return <Videos />;
    default:
      break;
  }
}
