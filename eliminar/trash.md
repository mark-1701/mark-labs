// Stack.jsx
export const Stack = ({
  children,
  gap = '4', // Valor de escala de Tailwind (4 = 1rem)
  direction = 'column',
  align = 'stretch',
  className = ''
}) => {
  const directionClass = direction === 'column' ? 'flex-col' : 'flex-row';

  return (
    <div
      className={`flex ${directionClass} items-${align} gap-${gap} ${className}`}
    >
      {children}
    </div>
  );
};

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge'; // Opcional pero MUY recomendado

/**
 * Función de utilidad para combinar clases de Tailwind sin conflictos
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Stack = ({ 
  children, 
  gap = '4', 
  direction = 'column', 
  align = 'stretch',
  className = '' 
}) => {
  return (
    <div 
      className={cn(
        'flex',
        // Dirección dinámica
        direction === 'column' ? 'flex-col' : 'flex-row',
        // Alineación dinámica
        {
          'items-start': align === 'start',
          'items-center': align === 'center',
          'items-end': align === 'end',
          'items-stretch': align === 'stretch',
          'items-baseline': align === 'baseline',
        },
        // Gap dinámico (usando template literal dentro de cn)
        `gap-${gap}`, 
        // Clases extra que el usuario quiera pasar
        className
      )}
    >
      {children}
    </div>
  );
};

const ALIGN_CLASSES = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const DIRECTION_CLASSES = {
  column: 'flex-col',
  row: 'flex-row',
};

export const Stack = ({ 
  children, 
  gap = '4', 
  direction = 'column', 
  align = 'stretch',
  className = '' 
}) => {
  return (
    <div 
      className={cn(
        'flex',
        DIRECTION_CLASSES[direction],
        ALIGN_CLASSES[align],
        // Si usas gap variable, asegúrate de tenerlos en una 'safelist' 
        // o usa un mapa similar a los de arriba
        `gap-${gap}`, 
        className // <--- El usuario siempre tiene la última palabra
      )}
    >
      {children}
    </div>
  );
};