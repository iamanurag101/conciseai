export const parseSection = (section: string) => {
  const lines = section.split('\n');
  const title = lines[0];

  const cleanTitle = title.startsWith('#')
    ? title.substring(1).trim()
    : title.trim();

  const content = lines.slice(1).join('\n');

  const points: string[] = [];
  let currentPoint = '';

  content.split('\n').forEach((line: string) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('•')) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = trimmedLine;
    } else if (!trimmedLine) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = '';
    } else {
      currentPoint += ' ' + trimmedLine;
    }
  });

  if (currentPoint) points.push(currentPoint.trim());

  return {
    title: cleanTitle,
    points: points.filter(
      (point) =>
        point &&
        !point.startsWith('#') &&
        !point.startsWith('[Choose')
    ) as string[],
  };
};
