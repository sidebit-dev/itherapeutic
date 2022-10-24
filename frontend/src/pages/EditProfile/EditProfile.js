import './EditProfile.css';

// Hooks
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Redux
import {profile, resetMessage} from '../../slices/userSlice';

// Components
import Message from '../../components/Message';

const EditProfile = () => {

    const dispatch = useDispatch();

    const {user, message, error, loading} = useSelector((state) => state.user);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

    // Load user data
    useEffect(() => {
        dispatch(profile());
    }, [dispatch]);

    // Fill form with user data
    useEffect(() => {

        if(user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return <div id='edit-profile'>
        <h2>Edite seus dados</h2>
        <p className='subtitle'>Atualizar seu perfil...</p>
        <form onSubmit={handleSubmit}>
            <input type={"text"} placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name || ""} />
            <input type={"email"} placeholder="E-mail" disabled value={email || ""}  />
            <label>
                <span>Quer alterar sua senha?</span>
                <input type={"password"} placeholder="Digite sua nova senha" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
            </label>
            <input type={"submit"} value="Atualizar" />
        </form>
    </div>;
};

export default EditProfile;