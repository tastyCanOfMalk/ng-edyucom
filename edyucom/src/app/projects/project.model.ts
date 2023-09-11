// project.model.ts
export interface Project {
    id: number | null;
    title: string;
    description: string;
    details: string;
    tags: string[];
    imagePath: string | null;
    imageLink?: string | null;
    infoProjectLink?: string | null;
    infoGitLink: string | null;
    useIframe?: boolean;
  }
