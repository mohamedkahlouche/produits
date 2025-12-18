import React from "react";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";

const firstName = "Mohamed Ali";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center gap-8 p-6">
      {/* En-tête avec titre et description */}

      <header className="text-center mb-6 animate-fade-in">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-auto my-3 pb-3">
          Boutique Élégante
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Découvrez notre produit vedette du mois, conçu pour offrir une
          expérience exceptionnelle alliant qualité et élégance
        </p>

        {/* Badge promotionnel */}
        <div className="inline-block mt-4 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
          🎯 Produit du mois
        </div>
      </header>

      {/* Carte produit */}
      <div className="card bg-gradient-to-r from-blue-500 to-purple-200  shadow-xl w-80 p-5 rounded-2xl">
        <Image />
        <Name />
        <Price />
        <Description />
      </div>
      <div className=" card bg-gradient-to-r from-blue-500 to-purple-500 max-auto shadow-xl w-80 p-4 rounded-3xl">
        <h3 className="text-2xl font-bold text-center">
          {firstName ? `Bonjour ${firstName}` : "Bonjour !"}
        </h3>
        {firstName && (
          <img
            src="/images/github.png"
            alt="github"
            className="w-16 h-16 rounded-full mx-auto mt-3"
          />
        )}
      </div>

      {/* Pied de page */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p className="text-xl font-bold">
          © 2025 Boutique Élégante. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
