import Image from 'next/image';

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}
export default function Home() {
  return (
      <body>
        <div>
          <h1>Welcome to my app</h1>
          <MyButton title="I'm a button" />
        </div>
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
  );
}
