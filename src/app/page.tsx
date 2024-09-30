import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to tedred</h1>
      <h2>Good Day</h2>
      <Image src="./images/my-image.jpg" alt="My Image" width={500} height={500} />
    </div>
  );
}
