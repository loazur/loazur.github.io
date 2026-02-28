import { useEffect, useRef } from 'react';
import '../styles/AnimatedBackground.css';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const CHARS = [
      '剣', '龍', '風', '火', '影', '光', '夢', '魂', '力', '道',
      '闇', '星', '月', '雷', '氷', '天', '地', '神', '鬼', '武',
      '戦', '命', '心', '刃', '炎', '空', '海', '雪', '華', '幻',
      'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ',
      'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト',
      'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
      'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ',
      'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン',
    ];

    const FONT_SIZE = 20;
    const DROP_SPEED_MIN = 0.2;
    const DROP_SPEED_MAX = 0.8;
    const COLUMN_GAP = 40;

    let columns = [];

    const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

    const createDrop = (x, randomizeY = true) => {
      const trailLength = 4 + Math.floor(Math.random() * 8);
      const speed = DROP_SPEED_MIN + Math.random() * (DROP_SPEED_MAX - DROP_SPEED_MIN);
      const chars = [];
      for (let i = 0; i < trailLength; i++) {
        chars.push(randomChar());
      }
      return {
        x: x,
        y: randomizeY ? -Math.random() * canvas.height * 2 : 0,
        speed: speed,
        chars: chars,
        trailLength: trailLength,
        charSwapTimer: 0,
        charSwapInterval: 8 + Math.floor(Math.random() * 20),
      };
    };

    const initColumns = () => {
      columns = [];
      const numCols = Math.ceil(canvas.width / COLUMN_GAP);
      for (let i = 0; i < numCols; i++) {
        columns.push(createDrop(i * COLUMN_GAP + (Math.random() - 0.5) * 10));
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (columns.length === 0) {
        initColumns();
        return;
      }

      // Ajuster le nombre de colonnes sans tout recréer
      const numCols = Math.ceil(canvas.width / COLUMN_GAP);

      if (numCols > columns.length) {
        // Ajouter des colonnes à droite
        for (let i = columns.length; i < numCols; i++) {
          columns.push(createDrop(i * COLUMN_GAP + (Math.random() - 0.5) * 10));
        }
      } else if (numCols < columns.length) {
        // Retirer les colonnes en trop
        columns.length = numCols;
      }
    };

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const drop of columns) {
        drop.y += drop.speed;

        drop.charSwapTimer++;
        if (drop.charSwapTimer >= drop.charSwapInterval) {
          drop.charSwapTimer = 0;
          const idx = Math.floor(Math.random() * drop.chars.length);
          drop.chars[idx] = randomChar();
        }

        for (let i = 0; i < drop.trailLength; i++) {
          const charY = drop.y - i * FONT_SIZE * 1.4;

          if (charY < -FONT_SIZE || charY > canvas.height + FONT_SIZE) continue;

          const t = drop.trailLength > 1 ? i / (drop.trailLength - 1) : 0;

          if (i === 0) {
            const glowSize = FONT_SIZE * 1.2;
            const gradient = ctx.createRadialGradient(
              drop.x, charY, 0,
              drop.x, charY, glowSize
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(drop.x - glowSize, charY - glowSize, glowSize * 2, glowSize * 2);

            ctx.font = `bold ${FONT_SIZE}px "Noto Serif JP", serif`;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          } else {
            const opacity = (1 - t) * 0.2;
            const size = FONT_SIZE - t * 4;
            ctx.font = `${size}px "Noto Serif JP", serif`;
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          }

          ctx.fillText(drop.chars[i], drop.x, charY);
        }

        const tailY = drop.y - drop.trailLength * FONT_SIZE * 1.4;
        if (tailY > canvas.height + FONT_SIZE * 2) {
          drop.y = -Math.random() * canvas.height * 0.5 - FONT_SIZE * drop.trailLength;
          drop.x = drop.x + (Math.random() - 0.5) * 20;
          for (let i = 0; i < drop.trailLength; i++) {
            drop.chars[i] = randomChar();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
}