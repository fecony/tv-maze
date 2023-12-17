import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router";
import "inter-ui/inter.css";
import "@/styles/app.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Routes />
    </StrictMode>,
);
