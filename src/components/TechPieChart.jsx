import { useState } from 'react';
import { getProjects } from '../data/projectsData';
import { useTranslation } from 'react-i18next';
import '../styles/TechPieChart.css';

export default function TechPieChart() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Compter les occurrences de chaque technologie
  const techCount = {};
  const techProjects = {};

  projects.forEach(project => {
    const tech = project.engine;
    techCount[tech] = (techCount[tech] || 0) + 1;
    
    if (!techProjects[tech]) {
      techProjects[tech] = [];
    }
    techProjects[tech].push(project.title);
  });

  // Trier et garder les 4 technologies les plus utilisées
  const sortedTechs = Object.entries(techCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  const total = sortedTechs.reduce((sum, [, count]) => sum + count, 0);

  // Couleurs pour chaque technologie
  const colors = [
    '#ffffff',
    '#cccccc',
    '#999999',
    '#666666'
  ];

  // Calculer les angles pour le camembert
  let currentAngle = 0;
  const slices = sortedTechs.map(([tech, count], index) => {
    const percentage = (count / total) * 100;
    const angle = (count / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;

    return {
      tech,
      count,
      percentage: percentage.toFixed(1),
      startAngle,
      angle,
      color: colors[index],
      projects: techProjects[tech]
    };
  });

  // Fonction pour créer un path SVG pour chaque tranche
  const createSlicePath = (startAngle, angle) => {
    const centerX = 100;
    const centerY = 100;
    const radius = 80;

    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (startAngle + angle - 90) * (Math.PI / 180);

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  const handleMouseMove = (e, tech) => {
    setHoveredTech(tech);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className="tech-pie-chart">
      <h3 className="chart-title">{t("home.techChart.title") || "Technologies les plus utilisées"}</h3>
      
      <div className="chart-container">
        <svg viewBox="0 0 200 200" className="pie-chart-svg">
          {slices.map((slice, index) => (
            <g key={index}>
              <path
                d={createSlicePath(slice.startAngle, slice.angle)}
                fill={slice.color}
                stroke="#1a1a1a"
                strokeWidth="2"
                className={`pie-slice ${hoveredTech === slice.tech ? 'hovered' : ''}`}
                onMouseMove={(e) => handleMouseMove(e, slice.tech)}
                onMouseLeave={handleMouseLeave}
              />
            </g>
          ))}
        </svg>

        <div className="chart-legend">
          {slices.map((slice, index) => (
            <div
              key={index}
              className={`legend-item ${hoveredTech === slice.tech ? 'active' : ''}`}
              onMouseMove={(e) => handleMouseMove(e, slice.tech)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="legend-color"
                style={{ backgroundColor: slice.color }}
              />
              <div className="legend-info">
                <span className="legend-tech">{slice.tech}</span>
                <span className="legend-count">
                  {slice.count} {slice.count > 1 ? t("home.techChart.projects") || "projets" : t("home.techChart.project") || "projet"} ({slice.percentage}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {hoveredTech && (
        <div 
          className="projects-popup"
          style={{
            left: `${mousePosition.x + 15}px`,
            top: `${mousePosition.y + 15}px`
          }}
        >
          <h4>{hoveredTech}</h4>
          <ul>
            {techProjects[hoveredTech].map((projectName, index) => (
              <li key={index}>{projectName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}