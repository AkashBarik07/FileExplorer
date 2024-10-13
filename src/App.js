import FileExplorer from "./Components/FileExplorer";
import "./styles.css";
import FileExplorerContextWrapper from "./Context/FileExplorerContext";

export default function App() {
  return (
    <FileExplorerContextWrapper>
      <FileExplorer />
    </FileExplorerContextWrapper>
  );
}
