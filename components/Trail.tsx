import { Children, FunctionComponent, ReactNode } from 'react';
import { useTrail, a } from '@react-spring/web';

interface TrailProps {
  open: boolean;
  children: ReactNode;
}

const Trail: FunctionComponent<TrailProps> = ({ open, children }) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, y: 20, height: 0 },
    delay: open ? (((index: number) => index * 200) as any) : 0,
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
