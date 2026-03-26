import { useRef, useEffect, useCallback } from "react";

interface UseInfiniteScrollOptions {
  speed: number; // px/s
}

/**
 * Hook que controla o scroll infinito via requestAnimationFrame.
 * Retorna uma ref para o elemento track e funções de pause/resume.
 * O easing de parada/retomada é feito interpolando um "speedFactor" (0..1).
 */
export function useInfiniteScroll({ speed }: UseInfiniteScrollOptions) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Estado interno via refs (sem re-render)
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);
  const speedFactorRef = useRef(1); // fator atual (0 = parado, 1 = velocidade total)
  const targetFactorRef = useRef(1); // fator desejado

  const animate = useCallback(
    (timestamp: number) => {
      if (!trackRef.current) return;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = timestamp;

      // Interpola speedFactor → target com easing diferente para parar vs retomar
      const target = targetFactorRef.current;
      const current = speedFactorRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.0005) {
        // ease-out ao parar (rápido), ease-in ao retomar (mais suave)
        const decay = target === 0 ? 0.001 : 0.006;
        speedFactorRef.current = current + diff * (1 - Math.pow(decay, dt));
      } else {
        speedFactorRef.current = target;
      }

      // Avança posição
      posRef.current += speed * speedFactorRef.current * dt;

      // Loop perfeito: reset quando passa da metade (que é 1 set de itens)
      const halfHeight = trackRef.current.scrollHeight / 2;
      if (halfHeight > 0 && posRef.current >= halfHeight) {
        posRef.current -= halfHeight;
      }

      trackRef.current.style.transform = `translateY(-${posRef.current}px)`;

      rafRef.current = requestAnimationFrame(animate);
    },
    [speed],
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [animate]);

  const pause = useCallback(() => {
    targetFactorRef.current = 0;
  }, []);

  const resume = useCallback(() => {
    targetFactorRef.current = 1;
  }, []);

  return { trackRef, pause, resume };
}
