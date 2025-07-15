import Image from "next/image";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
        <div className="contentWrapper flex justify-center min-h-screen">
          <div className="content flex flex-col">
            <Text>
              Howdy! I am a recently graduated computer engineer from Texas A&M University –– <em>whoop!</em>
            </Text>
            <Text>
              I am passionate about building products that are highly performant systems but also high level experiences
              that hide the nuts and bolts.
            </Text>
            <Text>
              When I'm not coding I put my electrical engineering side to use in designing super small low energy PCBs
              (4 layer with SoC, signal demands, used UWB).
            </Text>
            <Text>
              In my free time I enjoy cooking. I'm working through Kenji Lopez-Alt's excellent book (forgot title).
              I am a classically trained cellist and a barely trained pianist.
            </Text>               
          </div>
        </div>
    </>
  );
}
