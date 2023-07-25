import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const Wrapper = () => {
    return (
        <main className="dark:bg-dark-700 flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-100 p-4">
            <Toaster />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </main>
    );
};

export default Wrapper;
