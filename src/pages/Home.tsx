import {useHistory} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../services/firebase';

export function Home() {
    const history = useHistory();
    
    const {user, signInWithGoogle} = useAuth();

    const [roomCode, setRoomCode] = useState('');



    async function handleCreateRoom() {
      if (!user) {
        console.log('entrou !user');
        try {
          await signInWithGoogle()
        } catch(e) {
          console.log(e);
        }
        
      }   
      history.push('/rooms/new');

    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exist.');
            return;
        }

        history.push(`/rooms/${roomCode}`);
        

    }
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illstration"></img>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire duvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk"></img>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Google logo"></img>
                        Crie sua sala com o Google
                    </button>

                    <div className="separator">Ou entre em uma sala</div>

                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                            onChange={event => setRoomCode(event.target.value)}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}