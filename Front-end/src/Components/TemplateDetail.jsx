import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TemplateDetail = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      title: "Student Developer Portfolio",
      description: "A modern, text-only portfolio designed for student developers...",
      image_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Developer Showcase",
      description: "Highlight your coding projects and skills...",
      image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const selectedTemplate = templates.find((t) => t.id === parseInt(id));
    setTemplate(selectedTemplate);
  }, [id]);

  if (!template) return <div className="text-white text-center mt-20">Template not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">{template.title}</h1>
        <img src={template.image_url} alt={template.title} className="mt-6 w-full h-96 object-cover rounded-lg" />
        <p className="mt-4 text-lg text-gray-300">{template.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default TemplateDetail;
