import { SideBarGrid } from '../grid';

export const SidebarNav = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SideBarGrid c4="#ffffff" duration={100} reverseDuration={1100} />
      <SideBarGrid
        c4="#ffffff"
        c3="#ffffff"
        duration={150}
        reverseDuration={1200}
      />
      <SideBarGrid
        c4="#ffffff"
        c3="#ffffff"
        c2="#ffffff"
        duration={250}
        reverseDuration={1150}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={400}
        reverseDuration={1000}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={600}
        reverseDuration={800}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={800}
        reverseDuration={600}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={1000}
        reverseDuration={400}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={1200}
        reverseDuration={200}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={1400}
        reverseDuration={200}
      />
    </div>
  );
};
