import { useEffect, useRef } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/PageTemplate.js";
import { pagesData } from "../data/pagesData";

function ContentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const pathname = location.pathname.replace(/^\//, "") || "home";
  const key = pathname.toLowerCase();
  const page = pagesData[key];

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handleClick = (e) => {
      const a = e.target.closest("a[href^='/']");
      if (a && a.getAttribute("href").startsWith("/")) {
        e.preventDefault();
        navigate(a.getAttribute("href"));
      }
    };
    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, [navigate, page]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageTemplate title={page.title}>
      <div
        ref={contentRef}
        className="page-content"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </PageTemplate>
  );
}

export default ContentPage;
