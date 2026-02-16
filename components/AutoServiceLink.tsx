import { serviceLinks, ServiceKeyword } from "@/lib/service-links";

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function AutoServiceLink({ content }: { content: string }) {
  let updatedContent = content;

  (Object.keys(serviceLinks) as ServiceKeyword[]).forEach((keyword) => {
    const escapedKeyword = escapeRegExp(keyword);
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, "gi");

    updatedContent = updatedContent.replace(regex, (match) => {
      return `<a href="${serviceLinks[keyword]}" class="text-yellow-600 font-medium underline hover:text-yellow-700 transition">${match}</a>`;
    });
  });

  return <div dangerouslySetInnerHTML={{ __html: updatedContent }} />;
}
