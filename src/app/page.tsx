import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to tedred hamd ullah</h1>
      <Image src="./images/my-image.jpg" alt="My Image" width={500} height={500} />
    </div>
  );
}
