import FileUploadComponent from "./components/file-upload";
import ChatComponent from "./components/chat-component";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex justify-center gap-4 h-full p-4">
        <div className="w-[30vw] h-full flex justify-center border-2 rounded-2xl p-4 overflow-auto"><FileUploadComponent/></div>
        <div className="w-[70vw] h-full border-2 rounded-2xl p-4 overflow-auto"><ChatComponent/></div>
      </div>
    </div>
  );
}
