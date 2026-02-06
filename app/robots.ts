import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/"], // Protect private routes and APIs
    },
    sitemap: "https://nskai-udara.vercel.app/sitemap.xml",
  };
}
