import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Illstration"></img>
                <strong>Crie salas de Q&amp ao vivo</strong>
                <p>Tire duvidas em tempo real</p>

            </aside>
            <main>
                <img src={logoImg} alt="LetMeAsk"></img>
                <button>
                    <img src={googleIconImg} alt="Google logo"></img>
                    Crie sua sala com o Google
                </button>

                <div>Ou entre em uma sala</div>

                <form>
                    <input
                        type="text"
                        placeholder="Digite o codigo da sala"
                    />
                    <button type="submit">
                        Entrar na sala
                    </button>
                </form>
            </main>
        </div>
    )
}