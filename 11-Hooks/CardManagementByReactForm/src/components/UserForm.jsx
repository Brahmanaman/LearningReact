import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ setToggle, setUsers, editUser, setEditUser, users }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: editUser,
    mode: "onChange",
  });

  let handleFormSubmit = (data) => {
    if (editUser) {
      setUsers((prev) => {
        const updatedUsers = prev.map((user) => {
          return user.id === editUser.id ? { ...user, ...data } : user;
        });
        localStorage.setItem("Users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
      setEditUser(null);
    } else {
      let arr = [...users, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("Users", JSON.stringify(users));
    }

    reset();
    setToggle(false);
  };

  useEffect(() => {
    if (editUser) {
      reset(editUser);
    } else {
      reset({
        name: "",
        email: "",
        phone: "",
        role: "",
        designation: "",
        empId: "",
      });
    }
  }, [editUser, reset]);
  return (
    <>
      <div className="flex items-center justify-center fixed inset-0 z-50">
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" />
        <div className="flex flex-col items-center shadow p-5 bg-white rounded-md w-[30%] z-100">
          <h1 className="font-semibold mb-5 text-3xl">
            {editUser ? "Edit " : "Add "} User
          </h1>
          <form
            className="w-full space-y-5"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-stone-700 tracking-wider font-semibold font-serif"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name", { required: "name is required" })}
                className="border border-stone-300 outline-none rounded-sm py-1.5 px-2"
                type="text"
                placeholder="enter a name"
              />
              {errors.name && (
                <p className="text-red-700">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-stone-700 tracking-wider font-semibold font-serif"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: "email is required" })}
                className="border border-stone-300 outline-none rounded-sm py-1.5 px-2"
                type="email"
                placeholder="enter a email"
              />
              {errors.email && (
                <p className="text-red-700">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col  gap-1">
              <label
                className="uppercase text-stone-700 tracking-wider font-semibold font-serif"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                {...register("phone", {
                  required: "phone number is required",
                  minLength: {
                    value: 10,
                    message: "Min 10 digits is required",
                  },
                  maxLength: {
                    value: 10,
                    message: "Max 10 digits are required",
                  },
                })}
                className="border border-stone-300 outline-none rounded-sm py-1.5 px-2"
                type="number"
                placeholder="enter a mobile"
              />
              {errors.phone && (
                <p className="text-red-700">{errors.phone.message}</p>
              )}
            </div>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <p className="uppercase text-stone-700 tracking-tight font-semibold text-sm">
                  Manager
                </p>
                <input
                  {...register("role", { required: "role is required" })}
                  type="radio"
                  value="manager"
                  name="role"
                />
              </div>
              <div className="flex gap-2">
                <p className="uppercase text-stone-700 tracking-tight font-semibold text-sm">
                  Employee
                </p>
                <input
                  {...register("role", { required: "role is required" })}
                  type="radio"
                  value="employee"
                  name="role"
                />
              </div>
            </div>
            {errors.role && (
              <p className="text-red-700">{errors.role.message}</p>
            )}
            <div className="flex flex-col  gap-1">
              <label
                className="uppercase text-stone-700 tracking-wider font-semibold font-serif"
                htmlFor="designation"
              >
                Designation
              </label>
              <input
                {...register("designation", {
                  required: "designation is required",
                })}
                className="border border-stone-300 outline-none rounded-sm py-1.5 px-2"
                type="text"
                placeholder="enter a designation"
              />
              {errors.designation && (
                <p className="text-red-700">{errors.designation.message}</p>
              )}
            </div>
            <div className="flex flex-col  gap-1">
              <label
                className="uppercase text-stone-700 tracking-wider font-semibold font-serif"
                htmlFor="empId"
              >
                Employee Id
              </label>
              <input
                {...register("empId", { required: "Emp Id is required" })}
                className="border border-stone-300 outline-none rounded-sm py-1.5 px-2"
                type="text"
                placeholder="enter a Emp Id"
              />
              {errors.empId && (
                <p className="text-red-700">{errors.empId.message}</p>
              )}
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <button
                disabled={!isValid}
                className={` ${!isValid ? "bg-sky-700/50" : "bg-sky-700"} py-1 px-4  text-stone-200 rounded-sm cursor-pointer`}
              >
                {editUser ? "Update" : "Add"}
              </button>
              <button
                onClick={() => setToggle((prev) => !prev)}
                className="py-1 px-4 bg-stone-400 text-stone-950 rounded-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
