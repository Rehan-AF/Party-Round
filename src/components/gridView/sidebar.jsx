import { SideBarGrid, SmallGrid } from "../grid";

export const SidebarNav = () => {
  return (
    <div>
      <SideBarGrid c1="#ffffff" duration={100} reverseDuration={1100} />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        duration={150}
        reverseDuration={1050}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        duration={250}
        reverseDuration={950}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={400}
        reverseDuration={800}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={600}
        reverseDuration={600}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={800}
        reverseDuration={400}
      />
      <SideBarGrid
        c1="#ffffff"
        c2="#ffffff"
        c3="#ffffff"
        c4="#ffffff"
        duration={1000}
        reverseDuration={200}
      />
    </div>
  );
};
