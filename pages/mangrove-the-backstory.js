import { useEffect, useRef } from 'react';

export default function HomePage() {

  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/files/mangroveBackstory.pdf',
        },
        viewer.current,
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    })
  }, []);


  return (
    <div>
      <div ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );

}
