
import './App.css';
import Testimonio from './Componentes/testimonios';
import testimonios from './DatosTestimonios.jsx';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
      <h1>Esto es lo que dicen nuestros Alumnos sobre Rolling Code </h1>
      {testimonios.map((t, index) => (
    <Testimonio
      key={index}
      nombre={t.nombre}
      pais={t.pais}
      imagen={t.imagen}
      cargo={t.cargo}
      empresa={t.empresa}
      testimonio={t.testimonio}
    />
  ))}
    
      </div>
    </div>
  );
}

export default App;
