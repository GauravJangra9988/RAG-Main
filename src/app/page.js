import FileUploadComponent from "./components/file-upload";
import ChatComponent from "./components/chat-component";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen w-screen justify-center">
        <div className="w-[30vw] min-h-screen flex justify-center"><FileUploadComponent/></div>
        <div className="w-[70vw] min-h-screen border-l-2"><ChatComponent/></div>
      </div>
    </div>
  );
}
