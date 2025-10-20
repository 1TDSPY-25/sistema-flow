export default function CadastroForm() {
    return(
        <section>
            <h1>Crie sua conta</h1>
            <form>
                <div>
                    <label htmlFor="nome">Nome Completo</label>
                    <input id="nome" type="text" />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </section>
    );
}