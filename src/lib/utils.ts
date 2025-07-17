/**
 * Generates a project image URL based on the project title
 * @param title - The project title
 * @param format - The image format (default: 'png')
 * @returns The image URL path
 */
export function getProjectImageUrl(title: string): string {
  // Convert title to kebab-case and remove special characters
  const imageName = title
    .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters except spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .toLowerCase();
  
  return `/projects/${imageName}.png`;
} 