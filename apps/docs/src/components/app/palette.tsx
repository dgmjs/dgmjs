import type { ShapeProps } from "@dgmjs/core";

function Button({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-transparent w-10 h-8 hover:bg-slate-100 rounded cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}

interface PaletteProps {
  onPropsChange?: (props: ShapeProps) => void;
}

export function Palette({ onPropsChange }: PaletteProps) {
  const changeProps = (props: ShapeProps) => {
    if (onPropsChange) onPropsChange(props);
  };

  return (
    <div className="absolute left-4 top-4 bg-white border rounded-md w-40 p-2 flex flex-col gap-2 drop-shadow">
      <div className="flex gap-2 justify-center pt-2">
        <button
          className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"
          onClick={() =>
            changeProps({ fillColor: "$red4", strokeColor: "$red9" })
          }
        />
        <button
          className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer"
          onClick={() =>
            changeProps({ fillColor: "$blue4", strokeColor: "$blue9" })
          }
        />
        <button
          className="w-5 h-5 bg-green-500 rounded-full cursor-pointer"
          onClick={() =>
            changeProps({ fillColor: "$green4", strokeColor: "$green9" })
          }
        />
        <button
          className="w-5 h-5 bg-gray-500 rounded-full cursor-pointer"
          onClick={() =>
            changeProps({ fillColor: "$gray3", strokeColor: "$gray9" })
          }
        />
        <button
          className="w-5 h-5 bg-black rounded-full cursor-pointer"
          onClick={() =>
            changeProps({
              fillColor: "$background",
              strokeColor: "$foreground",
            })
          }
        />
      </div>

      <div className="flex text-sm font-medium">
        <Button onClick={() => changeProps({ fontSize: 16, strokeWidth: 1 })}>
          S
        </Button>
        <Button onClick={() => changeProps({ fontSize: 20, strokeWidth: 2 })}>
          M
        </Button>
        <Button onClick={() => changeProps({ fontSize: 28, strokeWidth: 3 })}>
          L
        </Button>
        <Button onClick={() => changeProps({ fontSize: 40, strokeWidth: 4 })}>
          XL
        </Button>
      </div>
    </div>
  );
}
