
import { Outlet, NavLink } from 'react-router';

function MainLayout() {
    return (
        <div className="app-layout">
            <header className="app-header">
                <h1>Task Manager</h1>
                <p>Manage your tasks efficiently</p>
            </header>

            <nav className="app-nav">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/tasks"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    My Tasks
                </NavLink>
            </nav>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
