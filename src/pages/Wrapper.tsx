import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
    return (
        <main className="dark:bg-dark-700 flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-100 p-4">
            <Toaster />
            <Outlet />
        </main>
    );
};

export default Wrapper;
