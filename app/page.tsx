import FrameworkGrid from '@/components/GridHoverDivs';
import RotateSectionOnScroll from '@/components/RotateSectionOnScroll';
import ScrollCards from '@/components/ScrollCards';
import WheelAutomatic from '@/components/WheelAutomatic';
import WheelDrag from '@/components/WheelDrag';
import WheelTimeSet from '@/components/WheelTimeSet';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* <ScrollCards /> */}
      {/* <WheelAutomatic /> */}
      {/* <WheelDrag /> */}
      {/* <WheelTimeSet /> */}
      {/* <FrameworkGrid /> */}
      <RotateSectionOnScroll />
    </main>
  );
}
