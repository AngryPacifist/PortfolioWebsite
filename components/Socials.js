import Link from "next/link";
import {RiTwitterLine , RiDiscordLine, RiMailLine, RiGithubLine}  from 'react-icons/ri'
const Socials = () => {
  return <div className=" flex items-center gap-x-5  text-lg">
    
    <Link href={'https://twitter.com/angry__pacifist'} className=" hover:text-accent transition-all duration-300"> 
    <RiTwitterLine/>
    </Link>
    <Link href={'mailto:meldiablo23@gmail.com'} className=" hover:text-accent transition-all duration-300"> 
    <RiMailLine/>
    </Link>
    <Link href={'https://github.com/Angrypacifist'} className=" hover:text-accent transition-all duration-300"> 
    <RiGithubLine/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300"> 
    <RiDiscordLine/>
    </Link>
    {/* <Link href={''} className=" hover:text-accent transition-all duration-300"> 
    <RiDribbbleLine/>
    </Link> */}
    
    </div>;
};

export default Socials;