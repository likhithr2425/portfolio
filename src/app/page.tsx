import { Container } from "./components/Container"

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:p-10 ">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Hello There!
        </h1>
        <p className="text-secondary text-sm pt-4 max-w-lg">
          Software Engineer at Amazon (SDE-1) with experience in scalable backend systems, distributed architectures, and production engineering. Passionate about building efficient, reliable software used at scale.
        </p>
      </Container>
     </div>
  );
}
