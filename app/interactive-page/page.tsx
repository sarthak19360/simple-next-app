import Counter from "@/components/Counter";
export default function () {
  return (
    <div className="flex flex-col w-6/12 mx-auto mt-32 pl-8">
      <h1 className="text-xl font-extrabold mb-4">
        Welcome to Interactive Page
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quas,
        pariatur provident dicta ea illum maiores eveniet doloremque, sint
        voluptatum cupiditate quam magni quos illo inventore laborum, saepe
        ullam ex minus. Consequatur, delectus ipsum nostrum exercitationem fugit
        quos tempora vero amet beatae necessitatibus aliquid laudantium?
      </p>
      <Counter />
    </div>
  );
}
