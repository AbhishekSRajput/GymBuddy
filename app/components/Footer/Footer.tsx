import Link from "next/link";
import Image from "next/image";

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/images/Footer/facebook.svg',
        link: 'https://facebook.com',
        width: 10
    },
    {
        imgSrc: '/images/Footer/insta.svg',
        link: 'https://instagram.com',
        width: 14
    },
    {
        imgSrc: '/images/Footer/twitter.svg',
        link: 'https://twitter.com',
        width: 14
    },

]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                            Gym <span className="text-primary">Buddy</span>.
                        </Link>
                    </div>
                    <h3 className='text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16'>Get Health advice in seconds <br />Reduce spending on personal gym trainer.</h3>
                    <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                            <Link href={items.link} key={i}>
                                <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='py-10 md:flex items-center justify-between border-t border-t-bordertop'>
                <h4 className='text-darkgrey text-sm text-center md:text-start font-normal'>@2023 - Gym Buddy. All Rights Reserved.</h4>
            </div>
        </div>
    )
}

export default footer;
