import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

function GiovaneModel(props) {
  const { scene } = useGLTF('/models/giovane_piece.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive object={scene} ref={modelRef} {...props} />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold">GIOVANE</h1>
        <nav className="space-x-6">
          <a href="#collections" className="hover:text-gray-400">Collections</a>
          <a href="#concept" className="hover:text-gray-400">Concept</a>
          <a href="#verification" className="hover:text-gray-400">Vérification</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </header>

      <main className="p-8">
        <section className="grid md:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-5xl font-bold mb-6">Redéfinir le Luxe</h2>
            <p className="text-lg text-gray-300 mb-4">
              GIOVANE fusionne l’authenticité du streetwear moderne avec l’élégance intemporelle du luxe classique.
            </p>
            <button className="text-black bg-white hover:bg-gray-200 px-4 py-2 rounded">Explorer</button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <Canvas className="h-96 rounded-2xl shadow-lg">
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <GiovaneModel scale={1.5} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>
        </section>
      </main>

      <footer className="p-6 text-center border-t border-gray-800 text-gray-600 text-sm">
        © {new Date().getFullYear()} GIOVANE. Tous droits réservés.
      </footer>
    </div>
  );
}

useGLTF.preload('/models/giovane_piece.glb');
