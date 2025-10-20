import { useForm } from "react-hook-form";
 
type FormData = {
  nome: string;
  email: string;
};
 
export default function CadastroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
 
  const onSubmit = (data: FormData) => {
    console.log("Usuário cadastrado:", data);
    alert("Cadastro realizado com sucesso!");
    reset();
  };
 
  return (
    <section className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        Crie sua conta
      </h1>
 
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-sm"
      >
        <div className="flex flex-col">
          <label htmlFor="nome" className="font-semibold text-gray-700 mb-1">
            Nome completo
          </label>
          <input
            id="nome"
            type="text"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...register("nome", { required: "Informe seu nome completo." })}
          />
          {errors.nome && (
            <small className="text-red-500">{errors.nome.message}</small>
          )}
        </div>
 
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold text-gray-700 mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...register("email", {
              required: "Informe seu e-mail.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido.",
              },
            })}
          />
          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>
 
        <button
          type="submit"
          className="mt-4 bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition"
        >
          Cadastrar
        </button>
      </form>
 
      <p className="text-center text-gray-500 text-sm mt-6">
        Já tem uma conta?{" "}
        <a href="/login" className="text-blue-700 hover:underline font-medium">
          Faça login
        </a>
      </p>
    </section>
  );
}