import Counter from "@/component/Counter/Counter";
import Link from "next/link";


const HomePage = () => {

//  throw new error()

  return (
    <div>
      <h1 className='text-2xl text-green-500 italic'>This is home page</h1>

     <Counter/>
     <Link href={'/rate'}><button className="btn btn-secondary">About</button></Link>
     <Link href={'/give'}><button className="btn btn-secondary">Contact</button></Link>
     <Link href={'/nested/contact'}><button className="btn btn-secondary">Con</button></Link>
    </div>
  );
};

export default HomePage;