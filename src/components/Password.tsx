import { useState } from 'react';

export default function PasswordField() {
    const [visibility, setVisibility] = useState('password');
    const conmutar = () => {
        if (visibility === 'password'){
            setVisibility('text');
        }else{
            setVisibility('password');
        }
    }
  return (
    <div className="w-full max-w-md m-10">
      <div className="relative">
        <input
          type={visibility}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200"
          placeholder="Contraseña"
        />
        <button
        onClick={conmutar}
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          Mostrar contraseña
        </button>
      </div>
    </div>
  );
}