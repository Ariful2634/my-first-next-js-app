import Image from "next/image";
import next from "@/assets/next.jpg"

const AlbumPage = () => {
    return (
        <div>
            <Image src={"https://siberci.com/wp-content/uploads/2023/04/Getting-Started-with-NextJS.jpg"}
            width={200}
            height={200}
            alt="next logo"/>
            <Image src={next}
            width={200}
            height={200}
            alt="next logo"/>
        </div>
    );
};

export default AlbumPage;