import { Navbar } from "../../components/navbar/navbar";
import { useForm } from "react-hook-form";
import { selectHeroeCreated, createHeroe } from "../../store/features/heroesSlice";
import { useSelector, useDispatch } from "react-redux";

export function CreateHeroe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const dispatch = useDispatch();
  const created = useSelector(selectHeroeCreated);
  const onSubmit = async (data) => {
    await dispatch(createHeroe(data));
    console.log(created)
  }

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="m-10">
        <div>
          <h1 className="text-3xl underline">Create heroe:</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="mt-2">Name:</label>
          <input className="rounded p-2 text-black" defaultValue="" {...register("nombre", { required: true })} />
          <label className="mt-2">Age:</label>
          <input className="rounded p-2 text-black" defaultValue="" {...register("edad", { required: true })} />
          <label className="mt-2">Image link:</label>
          <input className="rounded p-2 text-black" defaultValue="" {...register("image_link", { required: true })} />
          <label className="mt-2">Relations:</label>
          <input className="rounded p-2 text-black" defaultValue="" {...register("relaciones", { required: true })} />
          <label className="mt-2">Origin:</label>
          <input className="rounded p-2 text-black" defaultValue="" {...register("origen", { required: true })} />

          {errors.exampleRequired && <span>This field is required</span>}

          <input className="mt-10 rounded p-3 bg-white text-black" type="submit" />
        </form>
      </div>
    </div>
  );
}
