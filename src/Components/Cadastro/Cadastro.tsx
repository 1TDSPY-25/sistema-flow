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
  } = useForm<FormData>();
 
  const onSubmit = (data: FormData) => {
    console.log("Usuário cadastrado:", data);
    alert("Cadastro realizado com sucesso!");
  };
 
  return (
    <section>
      <h1>Crie sua conta</h1>
 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            {...register("nome", { required: "Informe seu nome completo." })}
          />
          {errors.nome && <small>{errors.nome.message}</small>}
        </div>
 
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Informe seu e-mail.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido.",
              },
            })}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
 
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}