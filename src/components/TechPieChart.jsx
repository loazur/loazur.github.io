import { useState } from 'react';
import { getProjects } from '../data/projectsData';
import { useTranslation } from 'react-i18next';
import '../styles/TechPieChart.css';

export default function TechPieChart() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Compter les occurrences de chaque technologie
  const techCount = {};
  const techProjects = {};

  projects.forEach(project => {
    const tech = project.engine;
    techCount[tech] = (techCount[tech] || 0) + 1;
    if (!techProjects[tech]) techProjects[tech] = [];
    techProjects[tech].push(project.title);
  });

  const sortedTechs = Object.entries(techCount)
    .sort((a, b) => b[1] - a[1]);

  const total = sortedTechs.reduce((sum, [, count]) => sum + count, 0);

  // Dégradé violet clair → violet profond
  const generateGradientPalette = (count) => {
    const from = { h: 263, s: 90, l: 78 }; // #c4b5fd — lavande clair
    const to   = { h: 270, s: 70, l: 25 }; // ~#3b1578 — violet très sombre

    return Array.from({ length: count }, (_, i) => {
      const t = count === 1 ? 0 : i / (count - 1);
      const h = Math.round(from.h + (to.h - from.h) * t);
      const s = Math.round(from.s + (to.s - from.s) * t);
      const l = Math.round(from.l + (to.l - from.l) * t);
      return `hsl(${h}, ${s}%, ${l}%)`;
    });
  };

  const colors = generateGradientPalette(sortedTechs.length);

  const centerX = 100;
  const centerY = 100;
  const outerRadius = 82;
  const innerRadius = 50;
  const gapAngle = 1.2;

  // Calculer les tranches avec gap
  let currentAngle = -90;
  const slices = sortedTechs.map(([tech, count], index) => {
    const fullAngle = (count / total) * 360;
    const angle = Math.max(fullAngle - gapAngle, 0.5);
    const startAngle = currentAngle + gapAngle / 2;
    currentAngle += fullAngle;

    return {
      tech,
      count,
      percentage: ((count / total) * 100).toFixed(1),
      startAngle,
      angle,
      color: colors[index],
      projects: techProjects[tech],
    };
  });

  // Path SVG donut — pas d'expansion, juste un arc propre
  const createSlicePath = (startAngle, angle, outer, inner) => {
    const startRad = startAngle * (Math.PI / 180);
    const endRad = (startAngle + angle) * (Math.PI / 180);

    const outerX1 = centerX + outer * Math.cos(startRad);
    const outerY1 = centerY + outer * Math.sin(startRad);
    const outerX2 = centerX + outer * Math.cos(endRad);
    const outerY2 = centerY + outer * Math.sin(endRad);

    const innerX1 = centerX + inner * Math.cos(startRad);
    const innerY1 = centerY + inner * Math.sin(startRad);
    const innerX2 = centerX + inner * Math.cos(endRad);
    const innerY2 = centerY + inner * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    return `M ${outerX1} ${outerY1} A ${outer} ${outer} 0 ${largeArc} 1 ${outerX2} ${outerY2} L ${innerX2} ${innerY2} A ${inner} ${inner} 0 ${largeArc} 0 ${innerX1} ${innerY1} Z`;
  };

  const hoveredSlice = hoveredIndex !== null ? slices[hoveredIndex] : null;

  return (
    <div className="tech-chart">
      <div className="tech-chart-header">
        <span className="tech-chart-number">◆</span>
        <div className="tech-chart-line" />
        <h2>{t("home.techChart.title") || "Technologies les plus utilisées"}</h2>
        <div className="tech-chart-line-right" />
        <span className="tech-chart-number">◆</span>
      </div>

      <div className="tech-chart-body">
        {/* Donut */}
        <div className="tech-chart-pie-wrapper">
          <svg viewBox="0 0 200 200" className="tech-chart-svg">
            {/* Tranches */}
            {slices.map((slice, index) => {
              const isHovered = hoveredIndex === index;
              const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
              return (
                <path
                  key={index}
                  d={createSlicePath(
                    slice.startAngle,
                    slice.angle,
                    isHovered ? outerRadius + 4 : outerRadius,
                    isHovered ? innerRadius - 2 : innerRadius
                  )}
                  fill={slice.color}
                  className={`tech-chart-slice ${isHovered ? 'hovered' : ''} ${isDimmed ? 'dimmed' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            })}

            {/* Centre */}
            <circle cx={centerX} cy={centerY} r={innerRadius - 6} fill="rgba(10,10,10,0.6)" />
            
            {hoveredSlice ? (
              <>
                <text
                  x={centerX} y={centerY - 5}
                  fill="#ffffff" fontSize="11" fontWeight="700"
                  textAnchor="middle" dominantBaseline="middle"
                  className="tech-chart-center-text"
                >
                  {hoveredSlice.tech}
                </text>
                <text
                  x={centerX} y={centerY + 10}
                  fill={hoveredSlice.color} fontSize="11" fontWeight="700"
                  textAnchor="middle" dominantBaseline="middle"
                  className="tech-chart-center-text"
                >
                  {hoveredSlice.percentage}%
                </text>
              </>
            ) : (
              <>
                <text
                  x={centerX} y={centerY - 4}
                  fill="#ffffff" fontSize="20" fontWeight="800"
                  textAnchor="middle" dominantBaseline="middle"
                  className="tech-chart-center-text"
                >
                  {total}
                </text>
                <text
                  x={centerX} y={centerY + 12}
                  fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="500"
                  textAnchor="middle" dominantBaseline="middle"
                >
                  {t("home.techChart.projectsLabel") || "projets"}
                </text>
              </>
            )}
          </svg>
        </div>

        {/* Liste */}
        <div className="tech-chart-list">
          {slices.map((slice, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
            return (
              <div
                key={index}
                className={`tech-chart-item ${isHovered ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className="tech-chart-item-dot"
                  style={{ backgroundColor: slice.color }}
                />
                <span className="tech-chart-item-tech">{slice.tech}</span>
                <span className="tech-chart-item-bar-wrapper">
                  <span
                    className="tech-chart-item-bar"
                    style={{
                      width: `${slice.percentage}%`,
                      backgroundColor: slice.color,
                    }}
                  />
                </span>
                <span className="tech-chart-item-pct" style={{ color: isHovered ? slice.color : undefined }}>
                  {slice.percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}