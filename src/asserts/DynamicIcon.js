import React from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const useIcons = (icons) => {
  const [fetchedIcons, setFetchedIcons] = React.useState();

  React.useEffect(() => {
    const slugs = icons.filter(icon => typeof icon === 'string');
    if (slugs.length > 0) {
      fetchSimpleIcons({ slugs }).then(setFetchedIcons);
    }
  }, [icons]);

  const getIconColor = (slug) => {
    switch (slug) {
      case 'visualstudiocode':
        return '#007ACC';
      case 'pycharm':
        return '#21D789';
      default:
        return null;
    }
  };

  if (fetchedIcons || icons.some(icon => typeof icon !== 'string')) {
    return icons.map((icon, index) => {
      if (typeof icon === 'string') {
        const simpleIcon = fetchedIcons?.simpleIcons[icon];
        if (!simpleIcon) return null;
        const customColor = getIconColor(icon);
        return renderSimpleIcon({
          icon: simpleIcon,
          size: 100,
          aProps: {
            onClick: (e) => e.preventDefault(),
          },
          props: {
            style: {
              fill: customColor || `#${simpleIcon.hex}`,
            }
          }
        });
      } else if (React.isValidElement(icon)) {
        // Render custom SVG component
        return React.cloneElement(icon, {
          key: index,
          style: {
            width: 100,
            height: 100,
            ...icon.props.style,
          },
          onClick: (e) => e.preventDefault(),
        });
      }
      return null;
    }).filter(Boolean);
  }

  return <div className="text-white">Loading...</div>;
};

const icons = [
  'pycharm',
  'python',
  'docker',
  'javascript',
  'react',
  'googlecloud',
  'git',
  'github',
  'postgresql',
  'css3',
  'jenkins',
  'visualstudiocode',
  'tailwindcss',
];

const DynamicIconCloud = () => {
  const renderedIcons = useIcons(icons);

  return (
      <Cloud>
        {renderedIcons}
      </Cloud>
    
  );
};

export default DynamicIconCloud;