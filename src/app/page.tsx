import Image from "next/image";
import Button from "./components/Button"

export default function Home() {
  function handleClick(){
    console.log("Rickrolled lol gottem.");
  }

  return (
    <>
      <h1>Welcome to my page</h1>

      <Button></Button>
    </>
  );
}
