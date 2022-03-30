import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/actors">Actors</NavLink></li>
            </ul>
        </nav>
    )
}