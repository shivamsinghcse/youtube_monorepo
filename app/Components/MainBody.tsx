import { EllipsisVertical, Images, Option } from "lucide-react";
import Image from "next/image";
import hkimg1 from "../images/hq720.webp"
import hkimg2 from "../images/hq720.jpg"
import hkimg3 from "../images/hq720 (1).jpg"
import hkpfp from "../images/hrkt.jpg"
import Link from "next/link";
export default function MainBody() {
  const yvideo = [
    {
      title: 'Awesome Tech Review - Pixel 7 Pro',
      channelName: 'TechByMatthew',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      channelId: 'UCvBY02TQS3WrRXOqet-z6zg',
      views: '1.5 Million',
      released: '2 months ago',
      thumbnail: hkimg1 // Sample video thumbnail URL
    },
    {
      title: 'Hilarious Cat Compilation ',
      channelName: 'Funny Felines',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=85ClQCMQ5Xo',
      channelId: 'UC_XaoMAqhNgCgwjR4HPgLNw',
      views: '23 Million',
      released: '1 year ago',
      thumbnail: hkimg2
    },
    {
      title: 'Breathtaking Nature Documentary ',
      channelName: 'Planet Earth',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=9Rg_kqO_K_Q',
      channelId: 'UCP_0pkzWaEr1RDvqRUvHl_g',
      views: '50 Million',
      released: '3 years ago',
      thumbnail: hkimg3 // Sample video thumbnail URL
    },
    {
      title: 'Awesome Tech Review - Pixel 7 Pro',
      channelName: 'TechByMatthew',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      channelId: 'UCvBY02TQS3WrRXOqet-z6zg',
      views: '1.5 Million',
      released: '2 months ago',
      thumbnail: hkimg1 // Sample video thumbnail URL
    },
    {
      title: 'Hilarious Cat Compilation ',
      channelName: 'Funny Felines',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=85ClQCMQ5Xo',
      channelId: 'UC_XaoMAqhNgCgwjR4HPgLNw',
      views: '23 Million',
      released: '1 year ago',
      thumbnail: hkimg2
    },
    {
      title: 'Breathtaking Nature Documentary ',
      channelName: 'Planet Earth',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=9Rg_kqO_K_Q',
      channelId: 'UCP_0pkzWaEr1RDvqRUvHl_g',
      views: '50 Million',
      released: '3 years ago',
      thumbnail: hkimg3 // Sample video thumbnail URL
    },
    {
      title: 'Awesome Tech Review - Pixel 7 Pro',
      channelName: 'TechByMatthew',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      channelId: 'UCvBY02TQS3WrRXOqet-z6zg',
      views: '1.5 Million',
      released: '2 months ago',
      thumbnail: hkimg1 // Sample video thumbnail URL
    },
    {
      title: 'Hilarious Cat Compilation ',
      channelName: 'Funny Felines',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=85ClQCMQ5Xo',
      channelId: 'UC_XaoMAqhNgCgwjR4HPgLNw',
      views: '23 Million',
      released: '1 year ago',
      thumbnail: hkimg2
    },
    {
      title: 'Breathtaking Nature Documentary ',
      channelName: 'Planet Earth',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=9Rg_kqO_K_Q',
      channelId: 'UCP_0pkzWaEr1RDvqRUvHl_g',
      views: '50 Million',
      released: '3 years ago',
      thumbnail: hkimg3 // Sample video thumbnail URL
    },
    {
      title: 'Awesome Tech Review - Pixel 7 Pro',
      channelName: 'TechByMatthew',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      channelId: 'UCvBY02TQS3WrRXOqet-z6zg',
      views: '1.5 Million',
      released: '2 months ago',
      thumbnail: hkimg1 // Sample video thumbnail URL
    },
    {
      title: 'Hilarious Cat Compilation ',
      channelName: 'Funny Felines',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=85ClQCMQ5Xo',
      channelId: 'UC_XaoMAqhNgCgwjR4HPgLNw',
      views: '23 Million',
      released: '1 year ago',
      thumbnail: hkimg2
    },
    {
      title: 'Breathtaking Nature Documentary ',
      channelName: 'Planet Earth',
      channelPfp: hkpfp,
      videoLink: 'https://www.youtube.com/watch?v=9Rg_kqO_K_Q',
      channelId: 'UCP_0pkzWaEr1RDvqRUvHl_g',
      views: '50 Million',
      released: '3 years ago',
      thumbnail: hkimg3 // Sample video thumbnail URL
    },
  ];
  return (<>
    {yvideo.map((item, index) => <Card title={item.title} thumbnail={item.thumbnail} channelName={item.channelName} videoLink={item.videoLink} views={item.views} released={item.released} channelPfp={item.channelPfp}></Card>)}
  </>)
}
function Card({ title, channelName, videoLink, channelPfp, views, released, thumbnail }) {
  return (
    <Link href={videoLink}>
    <div className="" >
      <Image
        src={thumbnail}
        alt={title}
        className="w-full "
      ></Image>
      <div className="my-2 gap-3 flex w-full justify-between">
        <Image src={channelPfp} alt={channelName}
          className="rounded-full w-12 h-12 ml-2"
        ></Image>
        <div className="inline">
          <div className="flex justify-items-stretch w-full ">
            {title}

          </div>
          <div className="text-xs text-gray-800">{channelName}• {views} views• {released}</div>
        </div>
        <EllipsisVertical className="mx-2"></EllipsisVertical>
      </div>
    </div>
    </Link>

  )
}